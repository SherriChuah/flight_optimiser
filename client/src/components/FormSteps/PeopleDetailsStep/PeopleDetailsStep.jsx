import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { columns as createColumns } from './PeopleListTableConfig';
import { Table, Th, Td, Tr, Button } from './PeopleDetailsStyle';
import { PeopleSearchDetails } from '../../../data/peopleDataModel';
import { AddOrEditDetails } from './PeopleDetailsEdit';

export const PeopleDetailsStep = ({inputValues}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [peopleDetails, setPeopleDetails] = React.useState([]);

    const [editingRowData, setEditingRowData] = useState(null);
   
    const handleEditEntry = (row) => {
      setEditingRowData(row); // Pass the existing row data for editing
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleSave = (data) => {
        const newEntry = PeopleSearchDetails.addEntry(data);
        setPeopleDetails([...peopleDetails, newEntry])
        handleCloseModal();
    };

    const handleDelete = (id) => {
      PeopleSearchDetails.deleteEntry(id);
      setPeopleDetails([...PeopleSearchDetails.PeopleSearchDetailsList]);
    };

    const columns = createColumns({handleDelete, handleEditEntry});

    const table = useReactTable({
        data: peopleDetails,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div >
        <Button onClick={() => setIsModalOpen(true)}>Add Entry</Button>

        {isModalOpen && <AddOrEditDetails 
            openOrClose={isModalOpen}
            onSave={handleSave} 
            onClose={handleCloseModal}
            rowData={editingRowData} 
            autocompleteValue={inputValues[0]} // Pass row data if editing
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
                {row.getVisibleCells().map(cell => {
                  if (cell.column.id === 'originAirport') {
                    const value = cell.getValue();

                    return (
                      <Td key={cell.id}>
                        {`${value.airport_name} (${value.iata})`}
                      </Td>
                    );
                  }
                  else {
                    return <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                  }
                })}
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
}
