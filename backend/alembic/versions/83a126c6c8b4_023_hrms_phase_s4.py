"""023_hrms_phase_s4

Revision ID: 83a126c6c8b4
Revises: e827862ef5ff
Create Date: 2026-06-16 12:29:57.009633

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '83a126c6c8b4'
down_revision: Union[str, Sequence[str], None] = 'e827862ef5ff'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
