import unittest
from unittest.mock import patch

from app.services.flight_search.prepare_flight_search import get_travel_date


class TestAirportCodes(unittest.TestCase):
    def test_get_travel_date(self):
        # Arrange
        data = {'travelDates': [{'startDate': '2015-02-02T00:00:00', 'endDate': '2015-01-01T00:00:00'}]}

        fly_direction_to = 'startDate'
        fly_direction_fro = 'endDate'

        expected_result1 = '2015-02-02'
        expected_result2 = '2015-01-01'

        # Act
        result1 = get_travel_date(data, fly_direction_to)

        # Assert
        self.assertEqual(result1, expected_result1)

        # Act
        result2 = get_travel_date(data, fly_direction_fro)

        # Assert
        self.assertEqual(result2, expected_result2)


    def test_get_departure_airport_info(self):
        pass


    def test_get_arrival_airport(self):
        pass
