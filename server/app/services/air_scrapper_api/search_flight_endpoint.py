import datetime
import requests
import os
from app.model import SearchInputs
from dotenv import load_dotenv

# from app.services.air_scrapper_api.fake_flight_search_data import fake_flight_search

load_dotenv('./../../../../server/secrets.env')


def get_flight_table_results_given_search_list(search_list):
    raw_flight_results = get_raw_flight_results(search_list)
    

def get_raw_flight_results(search_list: list):
    # flight_table = []

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

    #     flight_table.append(response.json()['data'])

    # print(flight_table)

    # return flight_table
    
    # TODO: REMOVE THIS WHEN OFFICIAL
    
    pass