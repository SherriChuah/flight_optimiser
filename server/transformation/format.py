from typing import Tuple
from flask import jsonify

def format_result_as_json(result: Tuple):
    column_names = result[0]

    rows = result[1:]

    list_of_dicts = [
        {column_names[i]: row[i] for i in range(len(column_names))}
        for row in rows
    ]
    return jsonify(list_of_dicts)
    