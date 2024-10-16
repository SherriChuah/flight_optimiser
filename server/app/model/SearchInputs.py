from dataclasses import dataclass
from typing import Optional


@dataclass
class SearchInputs:
    fly_out_date: str
    departure_airport: str
    arrival_airport: str
    one_way_flight: str
    cabin_class: str
    # no need counts actually
    # adult_count: str
    # children_count: str
    # infant_count: str
    prefer_directs: str = 'true'
    fly_back_date: Optional[str] = None
    return_flight: Optional[str] = None
