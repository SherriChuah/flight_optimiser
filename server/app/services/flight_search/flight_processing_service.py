import pandas as pd
import os
import json

from typing import Tuple
from datetime import datetime

from app.services.flight_search.prepare_flight_search import (
    prepare_people_details_for_search)
from app.services.air_scrapper_api.search_flight_endpoint import (
    get_flight_table_results_given_search_list)

from app.model.AirportDetails import AirportDetails
from app.model.CarrierDetails import CarrierDetails
from app.model import FullFlightDetails

from app.utils.conversion import split_currency_amount


# todo remove option of depart and arrival time can include that filter in the result page eventually
def process_search_for_results(data: dict):
    print('In process')

    print('\n\n_____________________')
    print('Search details for ')
    print(data)
    print('_____________________\n\n')

    search_list = prepare_people_details_for_search(data)

    print('\n\n\n______________________________________________________')
    print('Search List here')
    print(search_list)

    raw_flight_json_result_list, one_way_or_two_way = get_flight_table_results_given_search_list(search_list)

    # TODO: didn't filter out direct or indirect flights and time flight included so do thats
    filtered_itineraries = filter_direct_indirect_time_travel(
        raw_flight_json_result_list, data['peopleDetails'])

    # todo: remove this when done
    relative_path = f"../../../data_test/filtered_data_man_mxp_lhr_mxp.json"
    script_dir = os.path.dirname(os.path.abspath(__file__))
    absolute_path = os.path.normpath(os.path.join(script_dir, relative_path))
    with open(absolute_path, 'w') as json_file:
        json.dump(filtered_itineraries, json_file)
    
    each_group_flight_search_info_list = clean_flight_json_to_structured(filtered_itineraries, one_way_or_two_way)





    print('HEREEEEE')
    print(each_group_flight_search_info_list)



    ## NOTE: I have not included which flight info for each group, missed that oops
    ## now that i have the details of the each group i need to compare and do the analysis here

    return


def filter_direct_indirect_time_travel(raw_flight_table_results: list, people_details: list)-> list:
    multiple_itineraries = []
    # extract itineraries
    for res in raw_flight_table_results:
        curr_itinerary = []
        for data in res:
            curr_itinerary.extend(data['data']['itineraries'])
        multiple_itineraries.append(curr_itinerary)

    final_itineraries = []
    
    # filter out stops and time
    for itineraries, people_detail in zip(multiple_itineraries, people_details):
        curr_filtered_iti = []

        direct_or_indirect = people_detail['directFlight']
        # depart_after = datetime.strptime(people_detail['departAfter'], "%H:%M").time()
        # arrive_before = datetime.strptime(people_detail['arriveBefore'], "%H:%M").time()

        for itinerary in itineraries:
            is_valid_itinerary = True

            for leg in itinerary.get('legs'):
                # # check departure after time
                # if datetime.fromisoformat(leg['departure']).time() < depart_after:
                #     is_valid_itinerary = False
                #     break
                # elif datetime.fromisoformat(leg['arrival']).time() > arrive_before:
                #     is_valid_itinerary = False
                #     break

                # check direct indirect
                if leg['stopCount'] == 0 and direct_or_indirect != 'direct':
                    is_valid_itinerary = False
                    break
                elif leg['stopCount'] > 0 and direct_or_indirect == 'direct':
                    is_valid_itinerary = False
                    break


            # add valid itinerary       
            if is_valid_itinerary:       
                curr_filtered_iti.append(itinerary)
        
        final_itineraries.append(curr_filtered_iti)
    
    return final_itineraries
                

def clean_flight_json_to_structured(filtered_itineraries: list, one_way_or_two_way: list) -> list[Tuple]:
    each_group_flight_search_info_list = []

    # raw flight info for each search query
    for itineraries, one_way_or_two_way in zip(filtered_itineraries, one_way_or_two_way):

        flight_route_airports = get_flight_route(itineraries)

        df_outbound_inbound_cost = format_flight_results_to_dataframe(itineraries, one_way_or_two_way)

        each_group_flight_search_info_list.append([flight_route_airports, df_outbound_inbound_cost])
    
    return each_group_flight_search_info_list


def get_flight_route(itineraries: list[dict]) -> list:
    if itineraries[0].get('legs'):
        leg = itineraries[0].get('legs')

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


def format_flight_results_to_dataframe(itineraries_lst: list[dict], one_or_two_way: str) -> pd.DataFrame:
    outbound = []
    inbound = []
    cost = [] # for one way or two way depends

    for itinerary in itineraries_lst:
        total_cost = itinerary['price']['formatted']
        currency, total_cost = split_currency_amount(total_cost)

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
        cost.append({
            'cost': total_cost,
            'currency': currency})

    # combine outbound and inbound flights
    combined_inbound_outbound = pd.concat(
        [pd.DataFrame(outbound).add_prefix('outbound_'), 
         pd.DataFrame(inbound).add_prefix('inbound_'), 
         pd.DataFrame(cost)], axis=1)

    return combined_inbound_outbound


def get_flight_details(leg_details: dict):
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


def format_segment_list_raw(segment_list: list):
    # flight route kinda for the origin to destimation
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

