import { Div, Heading, BigDiv } from "./ReviewStepStyle";

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
                    <p>{destinationValue.airport_name} ({destinationValue.iata})</p>
                    <p>{destinationValue.city}, {destinationValue.country}</p>
                </Div>
                <Div>
                    <Heading>Travel Dates</Heading>
                    {travelDates.map((date, index) => (
                        <div>
                            <p>From: {date.startDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })};
                            </p>
                            <p>To: {date.endDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })};
                            </p>
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
                        <p>Group Name: {peopleDetail.group}</p>
                        <p>Origin Airport: {peopleDetail.originAirport.airport_name}, ({peopleDetail.originAirport.iata})</p>
                        <p>Depart After: {peopleDetail.departAfter}</p>
                        <p>Arrive Before: {peopleDetail.arriveBefore}</p>
                        <p>Cabin Class: {peopleDetail.cabinClass}</p>
                        <p>Direct Flight: {peopleDetail.directFlight}</p>
                    </Div>
                ))}
                <br/>
            </BigDiv>

        </div>
    )
}