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
