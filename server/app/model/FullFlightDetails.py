from dataclasses import dataclass
from datetime import datetime

from app.model.AirportDetails import AirportDetails
from app.model.CarrierDetails import CarrierDetails


@dataclass
class FullFlightDetails:
    origin_airport_details: AirportDetails
    destination_airport_details: AirportDetails
    departure_time: datetime
    arrival_time: datetime
    duration_in_minutes: int
    flight_number: str
    carrier_details: CarrierDetails

    def __str__(self) -> str:
        return (
            f"""
            Origin Airport Details:      {self.origin_airport_details}
            Destination Airport Details: {self.destination_airport_details}
            Departure Time:              {self.departure_time}
            Arrival Time:                {self.arrival_time}
            Duration in Minutes:         {self.duration_in_minutes}
            Flight Number:               {self.flight_number}
            Carrier Details:             {self.carrier_details}
            """)
    