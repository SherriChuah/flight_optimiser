import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PopUpTitle, PopUpStyle, PopUpInnerStyle } from './PeopleDetailsStyle';

import axios from 'axios';



export const AddOrEditBooking = ({ openOrClose, onSave, onClose, rowData }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [airports, setAirports] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://127.0.0.1:8080/airportcodes');
    //             setAirports(response.data);
                
    //         } catch (error) {
    //             console.error("Error fetching the data", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

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

    return (openOrClose) ? (
        <PopUpStyle>
            <PopUpInnerStyle>
                <PopUpTitle>{rowData ? 'Edit Entry' : 'Add New Entry'}</PopUpTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" placeholder="Group Name" {...register("group", { required: 'Name is required', maxLength: 30})}  />
                    </div>
                    <div>
                        <select {...register("originAirport", { required: true })} placeholder="Origin Airport" >
                        {/* {airports.map(airport => {
                            <option value={airport.iata}>{airport}</option>
                        })} */}
                            <option value="manny">Manchester</option>
                            <option value="london">London</option>
                        </select>
                    </div>
                    <div>
                        <select {...register("departBefore")}>
                            <option value="">Depart Before...</option>
                            <option value="6am">6 am</option>
                        </select>
                        <select {...register("arriveBefore")}>
                            <option value="">Arrive Before...</option>
                            <option value="6am">6 am</option>
                        </select>
                    </div>
                    <input {...register("direct", { required: true })} type="radio" value="Direct"/>
                    <input  {...register("direct", { required: true })} type="radio" value="Indirect"/>
                

                    <div>
                        <input type="submit"/>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </div>
                </form>
            </PopUpInnerStyle>
        </PopUpStyle>) : '';
}