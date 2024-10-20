from app.services.flight_search.prepare_flight_search import (
    prepare_people_details_for_search)
from app.services.air_scrapper_api.search_flight_endpoint import (
    get_flight_table_results_given_search_list)


def process_search_for_results(data: dict):
    print('In process')

    search_list = prepare_people_details_for_search(data)

    results = get_flight_table_results_given_search_list(search_list)

    print(results)
