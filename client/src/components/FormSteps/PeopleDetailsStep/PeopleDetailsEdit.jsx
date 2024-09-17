import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FormStyle, PopUpStyle, PopUpInnerStyle } from './PeopleDetailsStyle';

export const AddOrEditBooking = ({ openOrClose, onSave, onClose, rowData }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });

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
                <h2>{rowData ? 'Edit Entry' : 'Add New Entry'}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Group:</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    </div>

                    <div>
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </div>
                </form>
            </PopUpInnerStyle>
        </PopUpStyle>) : '';
}