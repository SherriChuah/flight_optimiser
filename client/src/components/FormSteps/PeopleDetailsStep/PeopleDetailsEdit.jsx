import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import { CustomOption } from './CustomOption'
import TextField from '@mui/material/TextField';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import { PopUpTitle, PopUpStyle, PopUpInnerStyle, Input, Select, FourColumn, SplitSelect, Label, Cancel, Submit, Center, Error, DirectIndirectDiv, ButtonGroupDiv } from './PeopleDetailsStyle';
import { generateTimeOptions } from './GenerateTimeOptions';

import axios from 'axios';


export const AddOrEditDetails = ({ openOrClose, onSave, onClose, rowData }) => {
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            cabinClass: 'economy',
            directFlight: 'direct'
          }
    });
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/airport-codes');
                setAirports(response.data);
                
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (rowData?.original) {
            reset({
                ...rowData.original,
                originAirport: `${rowData.original.originAirport.airport_name} (${rowData.original.originAirport.iata})`
            });
        } else {
            reset();
        }
    }, [rowData, reset]);

    const onSubmit = (data) => {
        if (typeof data.originAirport == 'string') {
            data.originAirport = rowData.original.originAirport;
        }
        onSave(data);
        reset();
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    const getHighlightedParts = (text, inputValue) => {
        const matches = match(text, inputValue, { insideWords: true });
        return parse(text, matches);
    };

    return (openOrClose) ? (
        <PopUpStyle>
            <PopUpInnerStyle>
                <PopUpTitle>{rowData ? 'Edit Entry' : 'Add New Entry'}</PopUpTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Group Name" {...register("group", { 
                        required: 'Please insert a group name.',
                        maxLength: {
                            value: 10,
                            message: 'Group name must be 10 characters or less.'
                        }})}  />
                    {errors.group && <Error>{errors.group.message}</Error>}

                    <Center>
                        <Controller
                            name="originAirport"
                            control={control}
                            rules={{ required: 'Please select origin airport.' }}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    sx={{ 
                                        width: '90%',
                                        '& fieldset': {
                                            borderColor: 'black',
                                            borderWidth: '1px',
                                            },
                                        }
                                    }
                                    // value={rowData ? rowData.original.originAirport : field.value ? field.value : ''}
                                    value={(() => {
                                        if (typeof field.value !== 'string' & field.value !== undefined) {
                                            return field.value
                                        } else if (rowData) {
                                            return rowData.original.originAirport
                                        } else {
                                            return ''
                                        }

                                        // return field.value ? field.value : rowData ? rowData.original.originAirport : ''
                                    })()}
                                    options={airports}
                                    noOptionsText='No option'
                                    renderInput={
                                        (params) => <TextField {...params} placeholder="Origin Airport" 
                                        sx={{
                                            '& input': {
                                                fontSize: '14px',
                                            },
                                        }}/>
                                    }
                                    getOptionLabel={(option) => option ? `${option.airport_name} (${option.iata})` : ''}
                                    filterOptions={(options, {inputValue}) =>{
                                        const filteredOptions = options.filter((option) => {
                                            const airportNameMatch = option.airport_name.toLowerCase().includes(inputValue.toLowerCase());
                                            const iataMatch = option.iata.toLowerCase().includes(inputValue.toLowerCase());
                                            return airportNameMatch || iataMatch;
                                        });
                                
                                        return filteredOptions.slice(0, 15);
                                    }}
                                    onChange={(_, value) => field.onChange(value || '')}
                                    renderOption={(props, option, { inputValue }) => {
                                        const { key, ...optionProps } = props;
                                        const { airport_name, iata } = option;
                                
                                        const airportNameParts = getHighlightedParts(airport_name, inputValue);
                                        const iataParts = getHighlightedParts(iata, inputValue);
            
                                        const allParts = {
                                            'airportNameParts': airportNameParts,
                                            'iataParts': iataParts
                                        }
                                        return (
                                            <li key={key} {...optionProps}>
                                                <CustomOption matches={allParts}/>
                                            </li>
                                        )
                                        
                                    }}
                                />
                            )}
                        />
                    </Center>
                    {errors.originAirport && <Error>{errors.originAirport.message}</Error>}


                    <FourColumn>
                        <SplitSelect {...register("departAfter")}>
                            <option value="">Depart After...</option>
                            {generateTimeOptions()}
                        </SplitSelect>
                        <SplitSelect {...register("arriveBefore")}>
                            <option value="">Arrive Before...</option>
                            {generateTimeOptions()}
                        </SplitSelect>
                    </FourColumn>

                    <Select {...register("cabinClass", { required: 'Please select Cabin Class' })}>
                        <option value="">Cabin Class...</option>
                        <option value="economy">Economy</option>
                    </Select>
                    {errors.cabinClass && <Error>{errors.cabinClass.message}</Error>}

                    <DirectIndirectDiv>
                        <Label>
                            Direct 
                            <input {...register("directFlight", { required: 'Please select direct or indirect flight.' })} type="radio" value="direct" />
                        </Label>
                        <Label>
                            Indirect
                            <input  {...register("directFlight", { required: 'Please select direct or indirect flight.' })} type="radio" value="indirect" />
                        </Label>  
                    </DirectIndirectDiv>
                    {errors.directFlight && <Error>{errors.directFlight.message}</Error>} 
                                  
        
                    <ButtonGroupDiv>
                        <Cancel type="button" onClick={handleClose}>Cancel</Cancel>
                        <Submit type="submit"/>
                    </ButtonGroupDiv>
                </form>
            </PopUpInnerStyle>
        </PopUpStyle>) : '';
}