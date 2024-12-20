from flask_cors import CORS
from dotenv import load_dotenv
from typing import Tuple
from app.model.mysql_model import get_airport_codes_from_database

load_dotenv('./../notebook/secrets.env')


def get_all_airport_codes() -> Tuple[str, str, str, str]:
    """Get airport code and format to tuple result

    Returns:
        Tuple[str, str, str, str]
    """
    column_names, result = get_airport_codes_from_database()

    return (tuple(column_names),) + result
