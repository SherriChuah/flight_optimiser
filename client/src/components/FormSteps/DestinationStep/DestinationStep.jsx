import React, { useState, useEffect } from 'react';
import { Heading } from "./DestinationStepStyle";
import { Input } from "./../../Input/Input";
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
    const [form, setForm] = useState({});
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


    return (
        <div>
            <Heading>Where to next?</Heading>
            
            {FORM_CONTENT[step.step].map(item => (
                // <Input key={item.name} {...item} onChange={onChange} form={form} onClick={onItemClick}/>

                <Autocomplete
                    sx={{ width: 300 }}
                    disablePortal
                    options={airports}
                    renderInput={
                        (params) => <TextField {...params} label="Search airport" />
                    }
                    noOptionsText='No option'
                    getOptionLabel={(option) => option.iata}
                    // renderOption={(props, option, { inputValue }) => {
                    //     const { key, ...optionProps } = props;

                    //     const matches = match(option.iata, inputValue, { insideWords: true });
                    //     const parts = parse(option.iata, matches);
                
                    //     return (
                    //         <li key={key} {...optionProps}>
                    //             <div>
                    //                 {parts.map((part, index) => (
                    //                     <span
                    //                     key={index}
                    //                     style={{
                    //                         fontWeight: part.highlight ? 700 : 400,
                    //                     }}
                    //                     >
                    //                     {part.text}
                    //                     </span>
                    //                 ))}
                    //             </div>
                    //         </li>
                    //     );
                    // }}

                    filterOptions={(options, { inputValue }) => {
                        const filteredOptions = options.filter((option) => {
                            const airportNameMatch = option.airport_name.toLowerCase().includes(inputValue.toLowerCase());
                            const cityMatch = option.city.toLowerCase().includes(inputValue.toLowerCase());
                            const countryMatch = option.country.toLowerCase().includes(inputValue.toLowerCase());
                            const iataMatch = option.iata.toLowerCase().includes(inputValue.toLowerCase());
                            return airportNameMatch || cityMatch || countryMatch || iataMatch;
                        });
                
                        return filteredOptions.slice(0, 10); // Limit the results to 10
                      }}

                    renderOption={(props, option, { inputValue }) => {
                        const { airport_name, city, country, iata } = option;
                
                        const airportNameMatch = match(airport_name, inputValue, { insideWords: true });
                        const airportNameParts = parse(airport_name, airportNameMatch);

                        const cityMatch = match(city, inputValue, { insideWords: true });
                        const cityParts = parse(city, cityMatch);

                        const countryMatch = match(country, inputValue, { insideWords: true });
                        const countryParts = parse(country, countryMatch);
                
                        const iataMatches = match(iata, inputValue, { insideWords: true });
                        const iataParts = parse(iata, iataMatches);

                        const allMatches = {
                            'airportNameParts': airportNameParts,
                            'cityParts': cityParts,
                            'countryParts': countryParts,
                            'iataParts': iataParts
                        }

                        return <CustomOption matches={allMatches}/>
                
                        return (
                          <li {...props}>
                            <Typography>
                              {/* Highlighted name */}
                              {anameParts.map((part, index) => (
                                <span
                                  key={`name-${index}`}
                                  style={{
                                    fontWeight: part.highlight ? 700 : 400,
                                    backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                                  }}
                                >
                                  {part.text}
                                </span>
                              ))}
                              {' - '}
                              {/* Highlighted description */}
                              {iataParts.map((part, index) => (
                                <span
                                  key={`description-${index}`}
                                  style={{
                                    fontWeight: part.highlight ? 700 : 400,
                                    backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                                  }}
                                >
                                  {part.text}
                                </span>
                              ))}
                            </Typography>
                          </li>
                        );
                    }}
                />
                
            ))}
            

            {/* <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Search for airports..."
            /> */}
        </div>
    )
}