import os
from flask import Flask, request
from flask_cors import CORS
from services.mysql_service import get_all_airport_codes
from transformation.format import format_result_as_json

app = Flask(__name__)
CORS(app) # need set here to not accept all origins


@app.after_request
def set_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response

@app.route('/airport-codes', methods=['GET'])
def airport_codes():
    # query = request.args.get('q', '')

    result = get_all_airport_codes()

    format_result_as_json(result)

    return format_result_as_json(result)

    # return jsonify(result)


@app.route('/process-search', methods=['POST'])
def process_search():
    data = request.get_json()

    print('here')
    print(data)

    print('ended')

    return data



if __name__ == "__main__":
    app.run(debug=True, port=8080)