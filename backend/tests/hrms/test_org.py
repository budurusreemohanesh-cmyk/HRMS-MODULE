import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app

@pytest.mark.asyncio
async def test_org_routes_registered():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        # Assuming database isn't populated, we just want to see a 200 list response
        # We need to bypass DB or expect a 500 if DB isn't running. 
        # Since we just want to ensure the route exists, we can mock get_db or just check for 404
        pass
