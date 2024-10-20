from dataclasses import dataclass
from typing import Optional


@dataclass
class SearchInputs:
    origin_sky_id: str
    origin_entity_id: str
    destination_sky_id: str
    destination_entity_id: str
    fly_out_date: str # YYYY-MM-DD
    cabin_class = 'economy'
    fly_back_date: Optional[str] = None # YYYY-MM-DD


    def get_dict(self):
        if self.fly_back_date:
            return {
                'originSkyId': self.origin_sky_id,
                'originEntityId': self.origin_entity_id,
                'destinationSkyId': self.destination_sky_id,
                'destinationEntityId': self.destination_entity_id,
                'date': self.fly_out_date,
                'returnDate': self.fly_back_date,
                'cabinClass': self.cabin_class,
                'adults': 1,
                'sortBy':"outbound_take_off_time",
                'currency':"GBP"}
        else:
            return {
                'originSkyId': self.origin_sky_id,
                'originEntityId': self.origin_entity_id,
                'destinationSkyId': self.destination_sky_id,
                'destinationEntityId': self.destination_entity_id,
                'date': self.fly_out_date,
                'cabinClass': self.cabin_class,
                'adults': 1,
                'sortBy':"outbound_take_off_time",
                'currency':"GBP"}
