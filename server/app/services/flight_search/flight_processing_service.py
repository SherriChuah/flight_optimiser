from app.services.flight_search.prepare_flight_search import (
    prepare_people_details_for_search)
from app.services.air_scrapper_api.search_flight_endpoint import (
    get_flight_table_results_given_search_list)
from app.model.AirportDetails import AirportDetails


def process_search_for_results(data: dict):
    print('In process')

    search_list = prepare_people_details_for_search(data)

    raw_flight_table_results = get_flight_table_results_given_search_list(search_list)

    clean_flight_table_results(raw_flight_table_results)



    # print(results)


def clean_flight_table_results(raw_flight_table_results: list):

    clean_results = []

    for result in raw_flight_table_results:
        flight_route_lst = get_flight_route(result)

        format_flight_results_to_dataframe(result)



def get_flight_route(result: dict) -> list:
    airports = result['filterStats']['airports']

    # alwqys 2 airports but would not tell you if return flight here
    return [
        AirportDetails(
            airports[0]['airports']['name'],
            airports[0]['city'],
            airports[0]['airports']['id'],
            airports[0]['airports']['entityId']
        ),
        AirportDetails(
            airports[1]['airports']['name'],
            airports[1]['city'],
            airports[1]['airports']['id'],
            airports[1]['airports']['entityId']
        ),
    ] 


def format_flight_results_to_dataframe(result: dict):
    data = []
    itineraries_lst = result['itineraries']

    for itinerary in itineraries_lst:
        # check length of legs to know return of no return flight
        # one way
        if len(itinerary) == 1:
            pass
