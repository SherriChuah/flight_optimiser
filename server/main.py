import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine
import pymysql
from dotenv import load_dotenv


load_dotenv('./../notebook/secrets.env')

app = Flask(__name__)
cors = CORS(app, origin='*') # need set here to not accept all origins



@app.route('/search', methods=['GET'])
def search():
    engine = create_engine(os.getenv('DATABASE_URI'))

    # Connect to the database
    connection = pymysql.connect(
        host='localhost',
        user=os.getenv('MYSQL_USERNAME'),
        password=os.getenv('MYSQL_PASSWORD'),
        db=os.getenv('MYSQL_DB'))    

    # create cursor
    cursor=connection.cursor()

    query = request.args.get('q', '')

    search_term = f'%{query}%'
    starts_with = f'{query}%'
    ends_with = f'%{query}'

    # Use raw SQL to search in columns 'a' and 'b'
    # TODO: COUNTRYYYYYYYY INCLUDEEEEEEE
    sql_query = """
                SELECT `airport_name`, `city`, `iata`
                FROM `airportcodes`
                WHERE `iata` LIKE %s
                OR `city` LIKE %s
                OR `airport_name` LIKE %s
                ORDER BY
                    CASE
                        -- Exact match for `iata` has the highest priority
                        WHEN `iata` = %s THEN 1
                        -- Matches where the target word is at the beginning or end of the string
                        WHEN `iata` LIKE %s THEN 2
                        WHEN `city` LIKE %s THEN
                            CASE
                                WHEN `city` LIKE %s THEN 3  -- Starts with the target word
                                WHEN `city` LIKE %s THEN 4  -- Ends with the target word
                                ELSE 5
                            END
                        WHEN `airport_name` LIKE %s THEN
                            CASE
                                WHEN `airport_name` LIKE %s THEN 6  -- Starts with the target word
                                WHEN `airport_name` LIKE %s THEN 7  -- Ends with the target word
                                ELSE 8
                            END
                        ELSE 9
                    END
                LIMIT 10
            """

    cursor.execute(sql_query, (
                query, search_term, search_term,
                query, search_term, search_term,
                starts_with, ends_with, search_term,
                starts_with, ends_with
            ))

    # Fetch all the records
    result = cursor.fetchall()

    engine.dispose()
    connection.close()

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, port=8080)