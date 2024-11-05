from app.services.flight_search.prepare_flight_search import (
    prepare_people_details_for_search)
from app.services.air_scrapper_api.search_flight_endpoint import (
    get_flight_table_results_given_search_list)


def process_search_for_results(data: dict):
    print('In process')

    search_list = prepare_people_details_for_search(data)

    raw_flight_table_results = get_flight_table_results_given_search_list(search_list)

    clean_flight_table_results(raw_flight_table_results)



    # print(results)


def clean_flight_table_results(raw_flight_table_results: list):

    clean_results = []

    for result in raw_flight_table_results:
        flight_route = get_flight_route(result)



def get_flight_route(result: dict):
    airports = result['filterStats']['airports']

    # one way
    if len(airports) == 1:
        pass
    # two way
    else:
        pass

    return 
