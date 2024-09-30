import { LeftDiv } from "./ReviewStepStyle";

export const ReviewStep = ({inputValue}) => {
    const [destinationValue, travelDates, peopleDetails] = inputValue;

    console.log(destinationValue);
    console.log(travelDates);
    console.log(peopleDetails);

    return (
        <div>
            <LeftDiv>
                <h2>Destination Airport</h2>
                <p>{destinationValue.airport_name} ({destinationValue.iata})</p>
                <p>{destinationValue.city}, {destinationValue.country}</p>
            </LeftDiv>
            <br/>
            <LeftDiv>
                <h2>Travel Dates</h2>
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
            </LeftDiv>
            <br/>
            <LeftDiv>
                <h2>People Details</h2>
                {peopleDetails.map((peopleDetail, index) => (
                    <LeftDiv key={peopleDetail.id}>
                        <p>Group Name: {peopleDetail.group}</p>
                        <p>Origin Airport: {peopleDetail.originAirport.airport_name}, ({peopleDetail.originAirport.iata})</p>
                        <p>Depart After: {peopleDetail.departAfter}</p>
                        <p>Arrive Before: {peopleDetail.arriveBefore}</p>
                        <p>Cabin Class: {peopleDetail.cabinClass}</p>
                        <p>Direct Flight: {peopleDetail.directFlight}</p>
                    </LeftDiv>
                ))}
                
            </LeftDiv>

        </div>
    )
}