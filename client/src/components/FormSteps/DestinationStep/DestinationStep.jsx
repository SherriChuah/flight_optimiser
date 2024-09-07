import React, { useState } from 'react';
import { Heading } from "./DestinationStepStyle";
import { Input } from "./../../Input/Input";
import { FORM_CONTENT } from "./../../../containers/Form/FormConstants";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const DestinationStep = (step) => {
    const [inputValue, setInputValue] = useState('');
    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onItemClick = ({ fieldName, value })=>{
        setForm(prev => ({ ...prev, [fieldName]: value }));
    }

    const onChange = (e)=>{
        const {value, name } = e.target
        setForm(prev=>({...prev, [name]:value}))
    }

    // const testing_lst = [
    //     {'name': 'hello', 'surname': 'world'},
    //     {'name': 'sherri', 'surname': 'myworld'},
    //     {'name': 'mybanana', 'surname': 'bananamy'}]

    const testing_lst = ['name', 'hello', 'surname', 'world']

    return (
        <div>
            <Heading>Where to next?</Heading>
            
            {FORM_CONTENT[step.step].map(item => (
                // <Input key={item.name} {...item} onChange={onChange} form={form} onClick={onItemClick}/>

                <Autocomplete
                    disablePortal
                    autoHighlight
                    options={testing_lst}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="testing" />}
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