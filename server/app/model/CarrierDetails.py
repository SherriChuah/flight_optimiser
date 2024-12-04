from dataclasses import dataclass
from typing import Optional

@dataclass
class CarrierDetails:
    entity_id: str
    name: str
    alternate_id: str
    
    def __str__(self) -> str:
        return (
            f"""
            Carrier ID:     {self.entity_id}
            Carrier Name:   {self.name}
            Carrier Alternate ID:   {self.alternate_id}
            """)
