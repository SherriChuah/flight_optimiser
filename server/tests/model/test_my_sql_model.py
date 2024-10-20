import unittest
from unittest.mock import patch, MagicMock
from app.model.mysql_model import get_airport_codes_from_database
from app.services.sql_queries import get_all_rows_sql

class TestGetAirportCodesFromDatabase(unittest.TestCase):
    @patch('app.model.mysql_model.create_engine')
    @patch('app.model.mysql_model.pymysql.connect')
    def test_get_airport_codes_from_database(self, mock_connect, mock_create_engine):
        # Arrange
        # Mock database connection and cursor
        mock_connection = MagicMock()
        mock_cursor = MagicMock()
        mock_connect.return_value = mock_connection
        mock_connection.cursor.return_value = mock_cursor

        # Mock cursor execute and fetch all method
        mock_cursor.execute.return_value = None
        mock_cursor.fetchall.return_value = [
            ('code1', 'description1'),
            ('code2', 'description2')
        ]

        # Mock the cursor's description attribute
        mock_cursor.description = [('code',), ('description',)]

        # Act
        column_names, result = get_airport_codes_from_database()

        # Assert
        # Results being correct
        self.assertEqual(column_names, ['code', 'description'])
        self.assertEqual(result, [('code1', 'description1'), ('code2', 'description2')])

        # SQL query executed
        mock_cursor.execute.assert_called_once_with(get_all_rows_sql)

        # connection closed
        mock_connection.close.assert_called_once()

        # engine disposed
        mock_create_engine.return_value.dispose.assert_called_once()


if __name__ == '__main__':
    unittest.main()
