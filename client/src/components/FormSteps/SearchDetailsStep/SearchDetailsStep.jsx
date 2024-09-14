import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Heading, Button } from "./SearchDetailsStepStyle";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const SearchDetailsStep = () => {
    const [travelDates, setTravelDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const onChangeHandler = (item) => {
      console.log(item);
      setTravelDates([item.selection]); 
      console.log(travelDates);
    };

    const goToToday = () => {
      const today = new Date();
      setTravelDates([
        {
          startDate: today,
          endDate: today,
          key: 'selection',
        },
      ]);
    };
    
    return (
      <div>
        <Heading>When are you traveling?</Heading>
        <DateRange
            editableDateInputs={true}
            onChange={onChangeHandler}
            moveRangeOnFirstSelection={false}
            ranges={travelDates}
        />
        <div>
          <Button onClick={goToToday}>Today</Button>
        </div>
      </div> 
    )
}