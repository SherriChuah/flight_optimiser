import React from 'react';

import { MainDiv, RightDiv, AirportLocationDetailsDiv, Span } from "./CustomOptionStyle"


export const CustomOption = (matches) => {

    return (
        <MainDiv>
            <RightDiv>
                {matches.matches.airportNameParts.map((part, index) => (
                    <Span
                        key={`airport-name-${index}`}
                        part={part}
                        type={'airportNameIATA'}
                    >
                        {part.text}
                    </Span>
                ))}
                {', '}
                {matches.matches.iataParts.map((part, index) => (
                    <Span
                        key={`iata-${index}`}
                        part={part}
                        type={'airportNameIATA'}
                    >
                        ({part.text})
                    </Span>
                ))}
            </RightDiv>
        </MainDiv>
    );
};

export default CustomOption;
