import os
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
from app.services.mysql_service import get_all_airport_codes
from app.services.flight_search.flight_processing_service import process_search_for_results
from app.utils.format import format_result_as_json

app = Flask(__name__)
CORS(app) # need set here to not accept all origins


# @app.after_request
# def set_headers(response):
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     response.headers["Access-Control-Allow-Headers"] = "*"
#     response.headers["Access-Control-Allow-Methods"] = "*"
#     return response


@app.route('/airport-codes', methods=['GET'])
def airport_codes() -> Response:
    """
    Get all airport codes from database

    Returns:
        _type_: _description_
    """
    result = get_all_airport_codes()

    return format_result_as_json(result)


@app.route('/process-search', methods=['POST'])
@cross_origin()
def process_search():
    data = request.get_json()['data']

    results = process_search_for_results(data)

    return results



if __name__ == "__main__":
    app.run(debug=True, port=8080)