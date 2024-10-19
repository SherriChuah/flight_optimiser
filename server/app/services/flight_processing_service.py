from app.services.prepare_flight_search import prepare_people_details_for_search


def process_search_for_results(data: dict):
    print('In process')

    search_list = prepare_people_details_for_search(data)

    print(search_list)



