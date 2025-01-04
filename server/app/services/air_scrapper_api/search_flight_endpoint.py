import datetime
from typing import Tuple
import requests
import os
from app.model import SearchInputs
from dotenv import load_dotenv

# from app.services.air_scrapper_api.fake_flight_search_data import fake_flight_search
env_file_path = os.path.join(os.path.dirname(__file__), os.pardir, os.pardir, 'secrets.env')
load_dotenv(env_file_path)


def get_flight_table_results_given_search_list(search_list) -> Tuple[list, list]:
    # raw_flight_info_list = []
    # one_way_or_two_way = []

    # url = "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights"

    # headers = {
    #     "x-rapidapi-key": os.getenv('AIR_SCRAPER_API_KEY'),
    #     "x-rapidapi-host": "sky-scrapper.p.rapidapi.com"
    # }

    # for search_item in search_list:
    #     querystring = search_item.get_dict()

    #     print()
    #     print('query')
    #     print(querystring)

    #     response = requests.get(url, headers=headers, params=querystring)

    #     raw_flight_info_list.append(response.json()['data'])
    # if 'returnDate' in querystring:
    #    one_way_or_two_way.append("two-way")
    # else:
    #    one_way_or_two_way.append("one-way")

    # print(raw_flight_info_list)
    # print(one_way_or_two_way)

    # return raw_flight_info_list, one_way_or_two_way
    
    # TODO: REMOVE THIS WHEN OFFICIAL
    return fake_data_list, ['two-way']
