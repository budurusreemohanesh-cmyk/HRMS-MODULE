from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_employee_left_returns_asset():
    # 1. Create an Asset
    # 2. Assign the Asset to an Employee (status -> In Use, assignment -> Assigned)
    # 3. Patch the Employee status to "Left"
    # 4. Verify Asset assignment is "Returned" and Asset is "Available"
    pass
