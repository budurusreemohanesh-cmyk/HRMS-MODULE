"""019_hrms_attendance_leave

Revision ID: 283f79b5e812
Revises: ae3fc24d1c24
Create Date: 2026-06-16 12:16:28.746613

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '283f79b5e812'
down_revision: Union[str, Sequence[str], None] = 'ae3fc24d1c24'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
