from dataclasses import dataclass

@dataclass
class AirportDetails:
    entityId: str
    name: str
    iata: str
    city: str
    country: str
    
    def __str__(self) -> str:
        return (
            f"""
            Airport ID:     {self.entityId}
            Airport Name:   {self.name}
            Airport IATA:   {self.iata}
            City:           {self.city}
            Country:        {self.country}
            """)
