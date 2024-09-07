import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine
import pymysql
from dotenv import load_dotenv
from typing import Tuple
from services.sql_queries import *

load_dotenv('./../notebook/secrets.env')


def get_all_airport_codes() -> Tuple[str, str, str, str]:
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

    return (tuple(column_names),) + result