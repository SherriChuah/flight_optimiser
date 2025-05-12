from datetime import datetime

def time_to_minutes(t):
    dt = datetime.strptime(t, "%Y-%m-%dT%H:%M:%S")
    return dt.hour * 60 + dt.minute


def split_currency_amount(string_amount):
    i = 0
    while i < len(string_amount) and not string_amount[i].isdigit():
        i += 1
        currency = string_amount[:i]
        amount = float(string_amount[i:].replace(',', ''))
        return currency, amount