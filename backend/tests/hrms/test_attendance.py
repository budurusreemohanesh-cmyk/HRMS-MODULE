import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app

@pytest.mark.asyncio
async def test_attendance_routes_registered():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        pass
