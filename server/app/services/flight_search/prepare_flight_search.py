from datetime import datetime
from app.model.SearchInputs import SearchInputs
from app.services.air_scrapper_api.search_airport_endpoint import (
    get_skyid_and_origin_entityid)


def prepare_people_details_for_search(data):
    search_list = []

    for person_detail in data['peopleDetails']:
        origin_sky_id, origin_entity_id = get_departure_airport_info(person_detail['originAirport'])
        destination_sky_id, destination_entity_id = get_arrival_airport(data)
        fly_out_date = get_travel_date(data, 'startDate')
        fly_back_date = get_travel_date(data, 'endDate')
        cabin_class = 'economy'

        # One way
        if fly_back_date == fly_out_date:
            search_list.append(SearchInputs(
                origin_sky_id, 
                origin_entity_id,
                destination_sky_id, 
                destination_entity_id,
                fly_out_date,
                cabin_class
            ))
        # Two way
        else:
            search_list.append(SearchInputs(
                origin_sky_id, 
                origin_entity_id,
                destination_sky_id, 
                destination_entity_id,
                fly_out_date,
                cabin_class,
                fly_back_date
            ))
    return search_list


def get_travel_date(data, fly_direction):
    if fly_direction == 'startDate':
        fly_date = data['travelDates'][0]['startDate'].split('T')[0]
    else:
        fly_date = data['travelDates'][0]['endDate'].split('T')[0]

    date_obj = datetime.strptime(fly_date, '%Y-%m-%d')

    return date_obj.strftime('%Y-%m-%d')


def get_departure_airport_info(data):
    departure_country = data['country']
    departure_iata = data['iata']

    sky_id, entity_id = get_skyid_and_origin_entityid(
        departure_country, departure_iata)
    
    return sky_id, entity_id


def get_arrival_airport(data):
    arrival_country = data['destination']['country']
    arrival_iata = data['destination']['iata']

    sky_id, entity_id = get_skyid_and_origin_entityid(
        arrival_country, arrival_iata)
    
    return sky_id, entity_id