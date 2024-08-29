import React, { useState } from 'react';
import { Heading } from "./DestinationStepStyle";
import { Input } from "./../../Input/Input";
import { FORM_CONTENT } from "./../../../containers/Form/FormConstants";

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

    return (
        <div>
            <Heading>Where to next?</Heading>
            
            {FORM_CONTENT[step.step].map(item => (
                <Input key={item.name} {...item} onChange={onChange} form={form} onClick={onItemClick}/>
                
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