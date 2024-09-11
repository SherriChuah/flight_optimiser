import React, { useState, useEffect } from 'react';
import { Heading, InputBox } from "./DestinationStepStyle";
// import { Input } from "./../../Input/Input";
import { FORM_CONTENT } from "./../../../containers/Form/FormConstants";
import { CustomOption } from './CustomOption'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import axios from 'axios';


export const DestinationStep = (step) => {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    // const [form, setForm] = useState({});
    const [airports, setAirports] = useState([]);

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // }

    // const onItemClick = ({ fieldName, value })=>{
    //     setForm(prev => ({ ...prev, [fieldName]: value }));
    // }

    // const onChange = (e)=>{
    //     const {value, name } = e.target
    //     setForm(prev=>({...prev, [name]:value}))
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/airportcodes');
                setAirports(response.data);
                
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);


    const getHighlightedParts = (text, inputValue) => {
        const matches = match(text, inputValue, { insideWords: true });
        return parse(text, matches);
    };


    return (
        <div>
            <Heading>Where to next?</Heading>
            
            {FORM_CONTENT[step.step].map(item => (

                <InputBox>
                    <Autocomplete
                        key={`${step.step}`}
                        sx={{ width: 350 }}
                        options={airports}
                        renderInput={
                            (params) => <TextField {...params} label="Search airport" />
                        }
                        noOptionsText='No option'
                        getOptionLabel={(option) => `${option.airport_name} (${option.iata})`}
                        filterOptions={(options, { inputValue }) => {
                            const filteredOptions = options.filter((option) => {
                                const airportNameMatch = option.airport_name.toLowerCase().includes(inputValue.toLowerCase());
                                const cityMatch = option.city.toLowerCase().includes(inputValue.toLowerCase());
                                const countryMatch = option.country.toLowerCase().includes(inputValue.toLowerCase());
                                const iataMatch = option.iata.toLowerCase().includes(inputValue.toLowerCase());
                                return airportNameMatch || cityMatch || countryMatch || iataMatch;
                            });
                    
                            return filteredOptions.slice(0, 15);
                        }}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                            console.log('inputValue', {inputValue})
                        }}
                        onChange={(event, newValue) => {
                            setValue(newValue === null ? '' : newValue.iata);
                        }}
                        renderOption={(props, option, { inputValue }) => {
                            const { key, ...optionProps } = props;
                            const { airport_name, city, country, iata } = option;
                    
                            const airportNameParts = getHighlightedParts(airport_name, inputValue);
                            const cityParts = getHighlightedParts(city, inputValue);
                            const countryParts = getHighlightedParts(country, inputValue);
                            const iataParts = getHighlightedParts(iata, inputValue);

                            const allParts = {
                                'airportNameParts': airportNameParts,
                                'cityParts': cityParts,
                                'countryParts': countryParts,
                                'iataParts': iataParts
                            }
                            return (
                                <li key={key} {...optionProps}>
                                    <CustomOption matches={allParts}/>
                                </li>
                            )
                            
                        }}
                    />
                </InputBox>
                
            ))}
        </div>
    )
}