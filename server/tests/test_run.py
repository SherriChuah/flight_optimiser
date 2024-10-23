# import pytest
# from app import app

# @pytest.fixture
# def client():
#     app.config['TESTING'] = True
#     with app.test_client() as client:
#         yield client

# def test_airport_codes_endpoint(client):
#     response = client.get('/airport-codes')
#     assert response.status_code == 200
#     assert response.json == {"message": "Hello, World!"}

# def test_greet(client):
#     response = client.get('/greet/Alice')
#     assert response.status_code == 200
#     assert response.json == {"message": "Hello, Alice!"}

# def test_greet_empty_name(client):
#     response = client.get('/greet/')
#     assert response.status_code == 404