import logging
import asyncio
from datetime import date
from sqlalchemy.future import select

from app.events.bus import bus
from app.db.session import async_session_maker
from app.hrms.assets.models import Asset, AssetAssignment

logger = logging.getLogger(__name__)

async def handle_employee_status_changed(payload: dict):
    """
    Listens for employee.status_changed event.
    If the new status is 'Left', automatically mark all of their assigned 
    assets as Returned and free up the Assets.
    """
    employee_id = payload.get('employee_id')
    new_status = payload.get('new_status')

    if not employee_id or new_status != 'Left':
        return

    logger.info(f"Processing asset returns for employee {employee_id} who just left.")

    async with async_session_maker() as session:
        # Get all active assignments for this employee
        query = select(AssetAssignment).where(
            AssetAssignment.employee_id == employee_id,
            AssetAssignment.status == "Assigned"
        )
        result = await session.execute(query)
        assignments = result.scalars().all()

        for assignment in assignments:
            assignment.status = "Returned"
            assignment.return_date = date.today()
            
            # Update the underlying Asset status
            asset_res = await session.execute(select(Asset).where(Asset.id == assignment.asset_id))
            asset = asset_res.scalar_one_or_none()
            if asset:
                asset.status = "Available"
                
        if assignments:
            await session.commit()
            logger.info(f"Successfully returned {len(assignments)} assets for employee {employee_id}")

def register_listeners():
    """Register all asset module listeners to the event bus."""
    # The bus callback can be a normal function, but since our logic uses AsyncSession,
    # we need to ensure the callback handles the async execution if it's called synchronously.
    # We will wrap it in asyncio.create_task if there's an event loop running,
    # or just run it synchronously. FastAPI runs the bus in an async context.
    
    def wrapper(payload):
        try:
            loop = asyncio.get_running_loop()
            loop.create_task(handle_employee_status_changed(payload))
        except RuntimeError:
            asyncio.run(handle_employee_status_changed(payload))
            
    bus.subscribe('employee.status_changed', wrapper)
    logger.info("Asset listeners registered.")
