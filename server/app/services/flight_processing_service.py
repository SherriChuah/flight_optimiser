from app.model.SearchInputs import SearchInputs
from datetime import datetime

from app.services.air_scrapper_api.search_flights_endpoint import get_skyid_and_origin_entityid


def process_search_for_results(data: dict):

    # Going to destination search details
    for person_detail in data['peopleDetails']:
        fly_out_date = get_fly_out_date(data)
        arrival_airport = get_arrival_airport(data)
        departure_airport = get_departure_airport(person_detail['originAirport'])

        print(fly_out_date)


    # SearchInputs(
    #     fly_out_date: str
    #     departure_airport: str
    #     arrival_airport: str
    #     one_way_flight: str
    #     cabin_class: str
    #     # no need counts actually
    #     # adult_count: str
    #     # children_count: str
    #     # infant_count: str
    #     prefer_directs: str = 'true'
    #     fly_back_date: Optional[str] = None
    #     return_flight: Optional[str] = None)

    print(data)
    pass


def get_fly_out_date(data):
    fly_out_date = data['travelDates'][0]['startDate'].split('T')[0]
    return datetime.strptime(fly_out_date, '%Y-%m-%d')


def get_arrival_airport(data):
    # put in country for searchAirport endpoint
    # check suggestionTitle between bracket if it matches the iata
    arrival_country = data['destination']['country']
    arrival_iata = data['destination']['iata']

    get_skyid_and_origin_entityid(arrival_country, arrival_iata)
    
    # arrival_airport = data['destination']

def get_departure_airport(data):
    departure_country = data['country']
    departure_iata = data['iata']

    get_skyid_and_origin_entityid(departure_country, departure_iata)