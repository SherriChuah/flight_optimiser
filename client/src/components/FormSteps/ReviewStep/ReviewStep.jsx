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
                {peopleDetails.map((peopleDetail, index) => (
                    <li key={index}>
                        <p>id: {peopleDetail.id}</p>
                        <p>group: {peopleDetail.group}</p>
                        <p>airport_name: {peopleDetail.originAirport.airport_name}</p>
                        <p>Origin Airport</p>
                        <p>{peopleDetail.originAirport.city}</p>
                        <p>{peopleDetail.originAirport.country}</p>
                        <p>{peopleDetail.originAirport.iata}</p>
                        <p>depart after: {peopleDetail.departAfter}</p>
                        <p>arrive before: {peopleDetail.arriveBefore}</p>
                        <p>cabin class: {peopleDetail.cabinClass}</p>
                        <p>direct flight: {peopleDetail.directFlight}</p>
                    </li>
                ))}
                
            </LeftDiv>

        </div>
    )
}