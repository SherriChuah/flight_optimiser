from typing import Tuple
import pandas as pd

from app.services.flight_search.prepare_flight_search import (
    prepare_people_details_for_search)
from app.services.air_scrapper_api.search_flight_endpoint import (
    get_flight_table_results_given_search_list)

from app.model.AirportDetails import AirportDetails
from app.model.CarrierDetails import CarrierDetails
from app.model import FullFlightDetails


def process_search_for_results(data: dict):
    print('In process')

    search_list = prepare_people_details_for_search(data)

    print('\n\n\n______________________________________________________')
    print('Search LIst here')
    print(search_list)


    raw_flight_json_result_list, one_way_or_two_way = get_flight_table_results_given_search_list(search_list)

    each_group_flight_search_info_list = clean_flight_json_to_structured(raw_flight_json_result_list, one_way_or_two_way)


    print('HEREEEEE')
    print(each_group_flight_search_info_list)

    ## NOTE: I have not included which flight info for each group, missed that oops
    ## now that i have the details of the each group i need to compare and do the analysis here

    return


def clean_flight_json_to_structured(raw_flight_table_results: list, one_way_or_two_way: list) -> list:
    each_group_flight_search_info_list = []

    # raw flight info for each search query
    for result, one_way_or_two_way in zip(
        raw_flight_table_results, one_way_or_two_way):

        flight_route_airports = get_flight_route(result)

        df_outbound, df_inbound, cost_list = format_flight_results_to_dataframe(result, one_way_or_two_way)

        each_group_flight_search_info_list.append((flight_route_airports, df_outbound, df_inbound, cost_list))
    
    return each_group_flight_search_info_list


def get_flight_route(result: dict) -> list:
    if result.get('data').get('itineraries'):
        leg = result.get('data').get('itineraries')[0]['legs']

        return [
            AirportDetails(
                leg[0]['origin']['entityId'],
                leg[0]['origin']['name'],
                leg[0]['origin']['id'],
                leg[0]['origin']['city'],
                leg[0]['origin']['country']
            ),
            AirportDetails(
                leg[0]['destination']['entityId'],
                leg[0]['destination']['name'],
                leg[0]['destination']['id'],
                leg[0]['destination']['city'],
                leg[0]['destination']['country']
            ),
        ] 
    else:
        return []


def format_flight_results_to_dataframe(result: dict, one_or_two_way: str) -> Tuple[pd.DataFrame, pd.DataFrame, list]:
    outbound = []
    inbound = []
    cost = [] # for one way or two way depends

    itineraries_lst = result['itineraries']

    for itinerary in itineraries_lst:
        total_cost = itinerary['price']['formatted']

        # outbound
        outbound_origin, outbound_destination, outbound_departure_time, outbound_arrival_time, outbound_total_duration_in_minutes, outbound_segment_list, outbound_stop_count = get_flight_details(itinerary['legs'][0])

        outbound.append({
            'origin_airport': outbound_origin,
            'destination_airport': outbound_destination,
            'departure_time': outbound_departure_time,
            'arrival_time': outbound_arrival_time,
            'total_duration_in_minutes': outbound_total_duration_in_minutes,
            'segment': outbound_segment_list,
            'stop_count': outbound_stop_count
        })
  
        # two-way, if exist
        if one_or_two_way == 'two-way':
            inbound_origin, inbound_destination, inbound_departure_time, inbound_arrival_time, inbound_total_duration_in_minutes, inbound_segment_list, inbound_stop_count = get_flight_details(itinerary['legs'][1])

            inbound.append({
                'origin_airport': inbound_origin,
                'destination_airport': inbound_destination,
                'departure_time': inbound_departure_time,
                'arrival_time': inbound_arrival_time,
                'total_duration_in_minutes': inbound_total_duration_in_minutes,
                'segment': inbound_segment_list,
                'stop_count': inbound_stop_count
            })

        # cost
        cost.append(total_cost)

    return pd.DataFrame(outbound), pd.DataFrame(inbound), cost


def get_flight_details(leg_details):
    origin_airport = leg_details['origin']
    destination_airport = leg_details['destination']

    origin = AirportDetails(
        origin_airport['entityId'],
        origin_airport['name'],
        origin_airport['id'],
        origin_airport['city'],
        origin_airport['country']
    )

    destination = AirportDetails(
        destination_airport['entityId'],
        destination_airport['name'],
        destination_airport['id'],
        destination_airport['city'],
        destination_airport['country']
    )

    total_duration_in_minutes = leg_details['durationInMinutes']
    stop_count = leg_details['stopCount']
    departure_time = leg_details['departure']
    arrival_time = leg_details['arrival']

    segment_list_raw = leg_details['segments']
    segment_list = format_segment_list_raw(segment_list_raw)

    return origin, destination, departure_time, arrival_time, total_duration_in_minutes, segment_list, stop_count


def format_segment_list_raw(segment_list):
    segment_list_clean = []

    for segment in segment_list:
        origin_details = AirportDetails(
                segment['id'],
                segment['origin']['name'],
                segment['origin']['displayCode'],
                segment['origin']['parent']['name'],
                segment['origin']['country']
            )
        destination_details = AirportDetails(
                segment['id'],
                segment['destination']['name'],
                segment['destination']['displayCode'],
                segment['destination']['parent']['name'],
                segment['destination']['country']
            )
        departure_time = segment['departure']
        arrival_time = segment['arrival']
        duration_in_minutes = segment['durationInMinutes']
        flight_number = segment['flightNumber']
        carrier_details = CarrierDetails(
            segment['operatingCarrier']['id'],
            segment['operatingCarrier']['name'],
            segment['operatingCarrier']['alternateId']
        )

        segment_list_clean.append(
            FullFlightDetails(
                origin_details,
                destination_details,
                departure_time,
                arrival_time,
                duration_in_minutes,
                flight_number,
                carrier_details
            )
        )

    return segment_list_clean
           