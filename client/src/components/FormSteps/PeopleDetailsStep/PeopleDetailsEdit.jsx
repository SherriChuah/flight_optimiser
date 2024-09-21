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



export const AddOrEditDetails = ({ openOrClose, onSave, onClose, rowData, autocompleteValue }) => {
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();
    const [airports, setAirports] = useState([]);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/airportcodes');
                console.log(response.data);
                setAirports(response.data);
                
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);

    // UseEffect to reset the form when editing an existing row
    useEffect(() => {
        if (rowData) {
            reset(rowData); // Reset form with the existing row data
        } else {
            reset(); // Reset to empty values for new entry
        }
    }, [rowData, reset]);

    // Handle form submission
    const onSubmit = (data) => {
        onSave(data); // Pass the form data back to the parent component
    };

    const handleClose = () => {
        reset(); // Reset the form on close
        onClose(); // Trigger the onClose callback to close the modal
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
                    <Input type="text" placeholder="Group Name" {...register("group", { required: 'Please insert a group name.'})}  />
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
                                            borderWidth: '1px', // Adjust this value for desired thickness
                                            },
                                        }
                                    
                                    }
                                    value={autocompleteValue}
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
                                    onChange={(_, value) => field.onChange(value ? value : '')} // Update the value in the form
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