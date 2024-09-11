import React from 'react';
import airplane_logo from './airplane_logo.png';

import { MainDiv, LeftDiv, Image, RightDiv, AirportLocationDetailsDiv, Span } from "./CustomOptionStyle"


export const CustomOption = (matches) => {

    return (
        <MainDiv>
            <LeftDiv>
                <Image src={airplane_logo} alt="airplane_logo"></Image>
            </LeftDiv>

            <RightDiv>
                <AirportLocationDetailsDiv type={'topRow'}>
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
                </AirportLocationDetailsDiv>

                <AirportLocationDetailsDiv type={'bottomRow'}>
                    {matches.matches.cityParts.map((part, index) => (
                        <Span
                            key={`city-${index}`}
                            part={part}
                            type={'cityCountry'}
                        >
                            {part.text}
                        </Span>
                    ))}
                    {', '}
                    {matches.matches.countryParts.map((part, index) => (
                        <Span
                            key={`country-${index}`}
                            part={part}
                            type={'cityCountry'}
                        >
                            {part.text}
                        </Span>
                    ))}
                </AirportLocationDetailsDiv>
            </RightDiv>
        </MainDiv>
    );
};

export default CustomOption;
