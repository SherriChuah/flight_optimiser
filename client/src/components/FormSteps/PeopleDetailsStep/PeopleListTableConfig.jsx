import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';


export const passengersList = () => [
    // {
    //     group: 'Mandy',
    //     originAirport: 'manchester',
    //     departAfter: '7:00am',
    //     arriveBefore: '7:00pm',
    //     cabinClass: 'Economy',
    //     directFlight: 'True',
    // },
    // {
    //     group: 'Mandy',
    //     originAirport: 'manchester',
    //     departAfter: '7:00am',
    //     arriveBefore: '7:00pm',
    //     cabinClass: 'Economy',
    //     directFlight: 'True',
    // }
];

export const columnHelper = createColumnHelper({});

export const columns = [
    columnHelper.accessor(row => row.id, {
        id: 'id',
        cell: info => <i>{info.getValue()}</i>,
        header: () => 'id'
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
    })
];