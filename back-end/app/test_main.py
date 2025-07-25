from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_endpoint_aleatorio():
    response = client.get("/entrada/aleatorio")
    assert response.status_code in [200, 404]
