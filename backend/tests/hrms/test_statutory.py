from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_pt_slabs():
    response = client.get("/api/v1/hrms/statutory/pt-slabs?state=KA")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_tds_slabs():
    response = client.get("/api/v1/hrms/statutory/tds-slabs?regime=new")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_pf_rules():
    response = client.get("/api/v1/hrms/statutory/pf-rules?company_id=1")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_esi_rules():
    response = client.get("/api/v1/hrms/statutory/esi-rules?company_id=1")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
