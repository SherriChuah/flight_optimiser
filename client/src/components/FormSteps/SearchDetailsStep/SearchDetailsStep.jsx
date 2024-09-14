import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const SearchDetailsStep = () => {
    const [state, setState] = useState([
        {
          startDate: null,
          endDate: null,
          key: 'selection'
        }
      ]);
    
    return (
        <DateRange
            editableDateInputs={true}
            onChange={item => {setState([item.selection]); console.log(item)}}
            moveRangeOnFirstSelection={false}
            ranges={state}
        />
    )
}