import React from 'react';
import airplane_logo from './airplane_logo.png';


export const CustomOption = (matches) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>

            <div style={{ marginRight: '16px', marginLeft: '16px' }}>
                <img src={airplane_logo} alt="airplane_logo" style={{ width: '40px', height: '40px' }} />
            </div>

            <div style={{ flex: 1 }}>
                
                <div style={{ marginBottom: '4px' }}>
                    {matches.matches.airportNameParts.map((part, index) => (
                        <span
                            key={`airport-name-${index}`}
                            style={{
                                fontWeight: part.highlight ? 700 : 400,
                                fontSize: '14px',
                                backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                            }}
                        >
                            {part.text}
                        </span>
                    ))}
                    {', '}
                    {matches.matches.iataParts.map((part, index) => (
                        <span
                            key={`iata-${index}`}
                            style={{
                                fontWeight: part.highlight ? 700 : 400,
                                fontSize: '14px',
                                backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                            }}
                        >
                            ({part.text})
                        </span>
                    ))}
                </div>

                <div>
                    {matches.matches.cityParts.map((part, index) => (
                        <span
                            key={`city-${index}`}
                            style={{
                                fontWeight: part.highlight ? 700 : 400,
                                fontSize: '11px',
                                backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                            }}
                        >
                            {part.text}
                        </span>
                    ))}
                    {', '}
                    {matches.matches.countryParts.map((part, index) => (
                        <span
                            key={`country-${index}`}
                            style={{
                                fontWeight: part.highlight ? 700 : 400,
                                fontSize: '11px',
                                backgroundColor: part.highlight ? '#ffff00' : 'transparent',
                            }}
                        >
                            {part.text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomOption;
