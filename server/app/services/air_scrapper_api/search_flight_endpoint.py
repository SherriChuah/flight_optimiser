import datetime
import requests
import os
from app.model import SearchInputs
from dotenv import load_dotenv

# from app.services.air_scrapper_api.fake_flight_search_data import fake_flight_search

load_dotenv('./../../../../server/secrets.env')


def get_flight_table_results_given_search_list(search_list):
    # TODO: REMOVE THIS WHEN OFFICIAL
    search_list = [SearchInputs(origin_sky_id='MAG', origin_entity_id='128668819', destination_sky_id='MAN', destination_entity_id='95673540', fly_out_date=datetime.datetime(2024, 12, 19, 0, 0), fly_back_date=datetime.datetime(2024, 12, 22, 0, 0), cabinClass='economy'), SearchInputs(origin_sky_id='HZK', origin_entity_id='129055516', destination_sky_id='MAN', destination_entity_id='95673540', fly_out_date=datetime.datetime(2024, 12, 19, 0, 0),fly_back_date=datetime.datetime(2024, 12, 22, 0, 0), cabinClass='economy')]

    # flight_table = []

    # url = "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights"

    # headers = {
    #     "x-rapidapi-key": os.getenv('AIR_SCRAPER_API_KEY'),
    #     "x-rapidapi-host": "sky-scrapper.p.rapidapi.com"
    # }

    # for search_item in search_list:
    #     querystring = search_item.get_dict()

    #     print(querystring)

    #     response = requests.get(url, headers=headers, params=querystring)

    #     flight_table.append(response.json())

    

    # print([fake_flight_search])