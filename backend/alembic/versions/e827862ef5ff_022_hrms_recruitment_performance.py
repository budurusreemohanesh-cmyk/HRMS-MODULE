"""022_hrms_recruitment_performance

Revision ID: e827862ef5ff
Revises: af050be391f5
Create Date: 2026-06-16 12:26:25.322633

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e827862ef5ff'
down_revision: Union[str, Sequence[str], None] = 'af050be391f5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
