from dataclasses import dataclass

@dataclass
class AirportDetails:
    name: str
    city: str
    iata: str
    entityId: str


    def get_str(self) -> str:
        return f"{self.name}, {self.city} ({self.iata})"
