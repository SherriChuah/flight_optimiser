import React from 'react';
import { DateRange } from 'react-date-range';
import { Heading, Button } from "./SearchDetailsStepStyle";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const SearchDetailsStep = ({step, inputValidation, goToTab, inputValues}) => {
  const [handleInputChange, setValueFunction] = inputValidation;

  const goToToday = () => {
    const today = new Date();
    setValueFunction([
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
          onChange={(item) => {
            handleInputChange(setValueFunction, [item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={inputValues}
      />
      <div>
        <Button onClick={goToToday}>Today</Button>
      </div>
    </div> 
  )
}