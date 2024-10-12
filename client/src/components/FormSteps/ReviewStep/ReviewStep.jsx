import { Div, Heading, BigDiv, Para } from "./ReviewStepStyle";

export const ReviewStep = ({inputValue}) => {
    const [destinationValue, travelDates, peopleDetails] = inputValue;

    console.log(destinationValue);
    console.log(travelDates);
    console.log(peopleDetails);

    return (
        <div>
            <BigDiv>
                <Div>
                    <Heading>Destination Airport</Heading>
                    <Para>{destinationValue.airport_name} ({destinationValue.iata})</Para>
                    <Para>{destinationValue.city}, {destinationValue.country}</Para>
                </Div>
                <Div>
                    <Heading>Travel Dates</Heading>
                    {travelDates.map((date, index) => (
                        <div>
                            <Para>From: {date.startDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })}
                            </Para>
                            <Para>To: {date.endDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })}
                            </Para>
                        </div>
                    ))}
                </Div>
            </BigDiv>
            <br/>
            <BigDiv>
                <div>
                    <Heading>People Details</Heading>
                </div>
                <br />             {peopleDetails.map((peopleDetail, index) => (
                    <Div key={peopleDetail.id}>
                        <Para>Group Name: {peopleDetail.group}</Para>
                        <Para>Origin Airport: {peopleDetail.originAirport.airport_name}, ({peopleDetail.originAirport.iata})</Para>
                        <Para>Depart After: {peopleDetail.departAfter}</Para>
                        <Para>Arrive Before: {peopleDetail.arriveBefore}</Para>
                        <Para>Cabin Class: {peopleDetail.cabinClass}</Para>
                        <Para>Direct Flight: {peopleDetail.directFlight}</Para>
                    </Div>
                ))}
                <br/>
            </BigDiv>

        </div>
    )
}