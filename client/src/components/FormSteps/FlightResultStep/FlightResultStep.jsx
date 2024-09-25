export const FlightResultStep = ({inputValue}) => {
    const [destinationValue, travelDates, peopleDetails] = inputValue;

    console.log(destinationValue);
    console.log(travelDates);
    console.log(peopleDetails);

    return (
        <div>
            <div>
                <p>airport_name: {destinationValue.airport_name}</p>
                <p>city: {destinationValue.city}</p>
                <p>country: {destinationValue.country}</p>
                <p>iata: {destinationValue.iata}</p>
            </div>
            <br/>
            <div>
                {travelDates.map((date, index) => (
                    <div>
                        <p>startDate: {date.startDate.getDate()}</p>
                        <p>endDate: {date.endDate.getDate()}</p>
                    </div>
                ))}
            </div>
            <br/>
            <div>
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
                
            </div>

        </div>
    )
}