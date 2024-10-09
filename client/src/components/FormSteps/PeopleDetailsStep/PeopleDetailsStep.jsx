import React, { useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { columns as createColumns } from './PeopleListTableConfig';
import { Table, Th, Td, Tr, Button } from './PeopleDetailsStyle';
import { PeopleSearchDetails } from '../../../data/peopleDataModel';
import { AddOrEditDetails } from './PeopleDetailsEdit';

export const PeopleDetailsStep = ({inputValidation, inputValue}) => {
    const [handleInputChange, setValueFunction] = inputValidation;
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRowData, setEditingRowData] = useState(null);
   
    const handleEditEntry = (row) => {
      setEditingRowData(row);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setEditingRowData();
      setIsModalOpen(false);
    };

    const handleSave = (data) => {
        if (editingRowData) {
          PeopleSearchDetails.editEntry(data);
          handleInputChange(setValueFunction, [...PeopleSearchDetails.PeopleSearchDetailsList]);
          setEditingRowData();
        }
        else {
          const newEntry = PeopleSearchDetails.addEntry(data);
          handleInputChange(setValueFunction, [...inputValue, newEntry]);
        }
        handleCloseModal();
    };

    const handleDelete = (id) => {
      PeopleSearchDetails.deleteEntry(id);
      handleInputChange(setValueFunction, [...PeopleSearchDetails.PeopleSearchDetailsList]);
    };

    const columns = createColumns({handleDelete, handleEditEntry});

    const table = useReactTable({
        data: inputValue,
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
