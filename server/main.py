import os
from flask import Flask, request
from flask_cors import CORS
from services.mysql_service import get_all_airport_codes
from transformation.format import format_result_as_json

app = Flask(__name__)
cors = CORS(app, origin='*') # need set here to not accept all origins


@app.route('/airpotcodes', methods=['GET'])
def airportcodes():
    # query = request.args.get('q', '')

    result = get_all_airport_codes()

    format_result_as_json(result)

    return format_result_as_json(result)

    # return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, port=8080)