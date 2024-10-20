import os
from sqlalchemy import create_engine
import pymysql
from dotenv import load_dotenv
from app.services.sql_queries import get_all_rows_sql
from typing import Tuple


load_dotenv('./../server/secrets.env')

def get_airport_codes_from_database() -> Tuple[list, tuple]:
    """Get airport codes from database

    Returns:
        Tuple(list, tuple): returns a list of columns and record results
    """

    engine = create_engine(os.getenv('DATABASE_URI'))

    # Connect to the database
    connection = pymysql.connect(
        host='localhost',
        user=os.getenv('MYSQL_USERNAME'),
        password=os.getenv('MYSQL_PASSWORD'),
        db=os.getenv('MYSQL_DB'))    

    cursor=connection.cursor()

    sql_query = get_all_rows_sql

    cursor.execute(sql_query)

    # Fetch all the records
    result = cursor.fetchall()

    column_names = [desc[0] for desc in cursor.description]

    engine.dispose()
    connection.close()

    return column_names, result
