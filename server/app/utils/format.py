from typing import Tuple
from flask import jsonify, Response

def format_result_as_json(result: Tuple) -> Response:
    """Format result as JSON

    Args:
        result (Tuple)

    Returns:
        Response: response object
    """
    column_names = result[0]

    rows = result[1:]

    list_of_dicts = [
        {column_names[i]: row[i] 
        for i in range(len(column_names))}
        for row in rows
    ]
    return jsonify(list_of_dicts)
    