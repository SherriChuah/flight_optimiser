import unittest
from unittest.mock import patch
from app.services.mysql_service import get_all_airport_codes

class TestGetAllAirportCodes(unittest.TestCase):

    @patch('app.services.mysql_service.get_airport_codes_from_database')
    def test_get_all_airport_codes(self, mock_get_codes):
        # Mock the return value of get_airport_codes_from_database
        mock_get_codes.return_value = ['airport_name', 'country', 'city', 'iata'], (('airport', 'country', 'city', 'AAA'),)

        # Call the function
        result = get_all_airport_codes()

        # Assert 
        # Returns expected output
        expected_result = (('airport_name', 'country', 'city', 'iata'), ('airport', 'country', 'city', 'AAA'))
        self.assertEqual(result, expected_result)

        # Assert that get_airport_codes_from_database was called
        mock_get_codes.assert_called_once()

if __name__ == '__main__':
    unittest.main()