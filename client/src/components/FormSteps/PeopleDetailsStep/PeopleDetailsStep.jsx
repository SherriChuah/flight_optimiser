import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { columns as createColumns } from './PeopleListTableConfig';
import { Table, Th, Td, Tr, Button } from './PeopleDetailsStyle';
import { Booking } from '../../../data/passengerDataModel';
import { AddOrEditBooking } from './PeopleDetailsEdit';

import axios from 'axios';

export const PeopleDetailsStep = () => {
    // const [airports, setAirports] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // // State to store the form data (both new and edited data)
    // const [formData, setFormData] = useState([]);

    // // State to hold the data for the row being edited
    const [editingRowData, setEditingRowData] = useState(null);
    
    // useEffect(() => {
    //   const fetchData = async () => {
    //       try {
    //           const response = await axios.get('http://127.0.0.1:8080/airportcodes');
    //           setAirports(response.data);
              
    //       } catch (error) {
    //           console.error("Error fetching the data", error);
    //       }
    //   };
    //   fetchData();
    // }, []);

    const handleAddNewEntry = () => {
      setEditingRowData(null); // No data means we are adding a new entry
      setIsModalOpen(true);

      console.log(editingRowData, isModalOpen)
    };

    const handleEditEntry = (row) => {
      setEditingRowData(row); // Pass the existing row data for editing
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleSave = (data) => {
        // if (editingRowData) {
        //     const updatedData = formData.map((item) =>
        //         item.id === editingRowData.id ? data : item
        //     );
        //     setFormData(updatedData);
        // } else {
        //     setFormData([...formData, { ...data, id: Date.now() }]);
        // }
        setIsModalOpen(false);
    };


    const [data, _setData] = React.useState(Booking.getBookings().length === 0 ? [] : Booking.getBookings());

    // const navigate = useNavigate();

    const handleDelete = (id) => {
      Booking.deleteBooking(id);
      setBookings(Booking.bookingsList); 
    };

    const columns = createColumns({handleDelete, handleEditEntry});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // const addBooking = (newBookingData) => {
    //   try {
    //     // Create a new Booking instance and validate
    //     const newBooking = new Booking(newBookingData, airports); 
    //     setBookings([...bookings, newBooking]); // Add to the local state of bookings
    //   } catch (error) {
    //     console.error(error.message); // Handle validation errors
    //   }
    // };

    

    return (
      <div >
        <Button onClick={() => setIsModalOpen(true)}>Add new entry</Button>

        {isModalOpen && <AddOrEditBooking 
            openOrClose={isModalOpen}
            onSave={handleSave} 
            onClose={handleCloseModal}
            rowData={editingRowData}  // Pass row data if editing
        />}

        <Table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
}
