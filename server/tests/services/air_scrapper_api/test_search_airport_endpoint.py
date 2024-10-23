import unittest
from unittest.mock import patch
import os

from app.services.air_scrapper_api.search_airport_endpoint import get_skyid_and_origin_entityid 


class TestSearchAirportEndpoint(unittest.TestCase):
    def test_get_skyid_and_origin_entityid(self):
        iata = 'iata_code'
        country = 'Country Name'
        
        with patch('requests.get') as mock_get:
            mock_get.return_value.json.return_value = {
                'data': [
                    {
                        'presentation': {
                            'suggestionTitle': 'Some Airport (iata_code)',
                            'subtitle': 'Country Name'
                        },
                        'navigation': {
                            'relevantFlightParams': {
                                'skyId': '12345',
                                'entityId': '67890'
                            }
                        }
                    },
                    # You can add more mock data if needed
                ]
            }
            os.environ['AIR_SCRAPER_API_KEY'] = 'fake_api_key'  # Mock the environment variable

            sky_id, entity_id = get_skyid_and_origin_entityid(country, iata)

            assert sky_id == '12345'
            assert entity_id == '67890'

    def test_no_matching_airport(self):
        iata = 'wrong_code'
        country = 'Country Name'
        
        with patch('requests.get') as mock_get:
            mock_get.return_value.json.return_value = {'data': []}
            os.environ['AIR_SCRAPER_API_KEY'] = 'fake_api_key'

            sky_id, entity_id = get_skyid_and_origin_entityid(country, iata)

            assert sky_id is None
            assert entity_id is None
