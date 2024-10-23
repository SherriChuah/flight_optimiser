import requests
import os
from dotenv import load_dotenv

load_dotenv('./../../../../server/secrets.env')


fake_data = {"status":True,"timestamp":1729372067145,"data":[{"skyId":"MAN","entityId":"95673540","presentation":{"title":"Manchester","suggestionTitle":"Manchester (MAN)","subtitle":"United Kingdom"},"navigation":{"entityId":"95673540","entityType":"AIRPORT","localizedName":"Manchester","relevantFlightParams":{"skyId":"MAN","entityId":"95673540","flightPlaceType":"AIRPORT","localizedName":"Manchester"},"relevantHotelParams":{"entityId":"27544856","entityType":"CITY","localizedName":"Manchester"}}},{"skyId":"MJC","entityId":"129052148","presentation":{"title":"Man","suggestionTitle":"Man (MJC)","subtitle":"Ivory Coast"},"navigation":{"entityId":"129052148","entityType":"AIRPORT","localizedName":"Man","relevantFlightParams":{"skyId":"MJC","entityId":"129052148","flightPlaceType":"AIRPORT","localizedName":"Man"},"relevantHotelParams":{"entityId":"27549261","entityType":"CITY","localizedName":"Man"}}},{"skyId":"MNL","entityId":"95673326","presentation":{"title":"Manila Ninoy Aquino","suggestionTitle":"Manila Ninoy Aquino (MNL)","subtitle":"Philippines"},"navigation":{"entityId":"95673326","entityType":"AIRPORT","localizedName":"Manila Ninoy Aquino","relevantFlightParams":{"skyId":"MNL","entityId":"95673326","flightPlaceType":"AIRPORT","localizedName":"Manila Ninoy Aquino"},"relevantHotelParams":{"entityId":"27544979","entityType":"CITY","localizedName":"Manila"}}},{"skyId":"MHG","entityId":"129052885","presentation":{"title":"Mannheim","suggestionTitle":"Mannheim (MHG)","subtitle":"Germany"},"navigation":{"entityId":"129052885","entityType":"AIRPORT","localizedName":"Mannheim","relevantFlightParams":{"skyId":"MHG","entityId":"129052885","flightPlaceType":"AIRPORT","localizedName":"Mannheim"},"relevantHotelParams":{"entityId":"27544924","entityType":"CITY","localizedName":"Mannheim"}}},{"skyId":"MGA","entityId":"95673543","presentation":{"title":"Managua","suggestionTitle":"Managua (MGA)","subtitle":"Nicaragua"},"navigation":{"entityId":"95673543","entityType":"AIRPORT","localizedName":"Managua","relevantFlightParams":{"skyId":"MGA","entityId":"95673543","flightPlaceType":"AIRPORT","localizedName":"Managua"},"relevantHotelParams":{"entityId":"27544912","entityType":"CITY","localizedName":"Managua"}}},{"skyId":"MAO","entityId":"95674366","presentation":{"title":"Manaus","suggestionTitle":"Manaus (MAO)","subtitle":"Brazil"},"navigation":{"entityId":"95674366","entityType":"AIRPORT","localizedName":"Manaus","relevantFlightParams":{"skyId":"MAO","entityId":"95674366","flightPlaceType":"AIRPORT","localizedName":"Manaus"},"relevantHotelParams":{"entityId":"27544857","entityType":"CITY","localizedName":"Manaus"}}},{"skyId":"IM","entityId":"29475151","presentation":{"title":"Isle of Man","suggestionTitle":"Isle of Man","subtitle":""},"navigation":{"entityId":"29475151","entityType":"COUNTRY","localizedName":"Isle of Man","relevantFlightParams":{"skyId":"IM","entityId":"29475151","flightPlaceType":"COUNTRY","localizedName":"Isle of Man"},"relevantHotelParams":{"entityId":"29475151","entityType":"COUNTRY","localizedName":"Isle of Man"}}},{"skyId":"IXE","entityId":"128668563","presentation":{"title":"Mangalore","suggestionTitle":"Mangalore (IXE)","subtitle":"India"},"navigation":{"entityId":"128668563","entityType":"AIRPORT","localizedName":"Mangalore","relevantFlightParams":{"skyId":"IXE","entityId":"128668563","flightPlaceType":"AIRPORT","localizedName":"Mangalore"},"relevantHotelParams":{"entityId":"27542924","entityType":"CITY","localizedName":"Mangalore"}}}]}


def get_skyid_and_origin_entityid(country, iata):
    # url = "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport"

    # querystring = {"query": iata,"locale":"en-US"}

    # headers = {
    #     "x-rapidapi-key": os.getenv('AIR_SCRAPER_API_KEY'),
    #     "x-rapidapi-host": "sky-scrapper.p.rapidapi.com"
    # }

    # response = requests.get(url, headers=headers, params=querystring).json()


    # data_list = response['data']

    # TODO: UNCOMMENT ABOVE AND REMOVE BOTTOM LINE
    data_list = fake_data['data']

    # print(country, iata)

    for data in data_list:
        # print((data['presentation']['suggestionTitle'].split('(')))
        # print(data['presentation']['subtitle'])
        # print(data['navigation']['relevantFlightParams'])
        # print()
        # Check if the suggestionTitle between bracket matches the IATA
        if '(' in data['presentation']['suggestionTitle']:
            if (iata in (data['presentation']['suggestionTitle'].split('('))[1] and 
                data['presentation']['subtitle'] == country):
                flight_param = data['navigation']['relevantFlightParams']
                return flight_param['skyId'], flight_param['entityId']
    
    print('Not matching airport')
    return None, None

    