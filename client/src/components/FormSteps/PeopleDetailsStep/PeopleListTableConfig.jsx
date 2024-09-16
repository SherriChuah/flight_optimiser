import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { ButtonContainer, EditButton, DeleteButton } from './PeopleDetailsStyle';


export const columnHelper = createColumnHelper({});

export const columns = ({handleDelete, navigate}) => [
    columnHelper.accessor(row => row.id, {
        id: 'id',
        cell: info => <i>{info.getValue()}</i>,
        header: () => 'ID'
    }),
    columnHelper.accessor('group', {
    //   cell: info => info.getValue(),
      header: () => 'Group'
    }),
    columnHelper.accessor('originAirport', {
      header: () => 'Origin Airport',
    //   cell: info => info.getValue()
    }),
    columnHelper.accessor('departAfter', {
      header: () => 'Depart After'
    }),
    columnHelper.accessor('arriveBefore', {
      header: () => 'Arrive Before'
    }),
    columnHelper.accessor('cabinClass', {
      header: () => 'Cabin Class'
    }),
    columnHelper.accessor('directFlight', {
        header: () => 'Direct Flight'
    }),
    columnHelper.accessor('editDelete', {
      header: '',
      cell: ({row}) => (
        <ButtonContainer>
          <EditButton onClick={() => navigate(`/edit/${row.id}`, { state: { row } })}>Edit</EditButton>
          <DeleteButton onClick={() => handleDelete(row.id)}>X</DeleteButton>
        </ButtonContainer>),
    }),
];