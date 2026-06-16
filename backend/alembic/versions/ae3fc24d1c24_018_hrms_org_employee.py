"""018_hrms_org_employee

Revision ID: ae3fc24d1c24
Revises: a2d6a900fe3d
Create Date: 2026-06-16 12:12:56.444788

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ae3fc24d1c24'
down_revision: Union[str, Sequence[str], None] = 'a2d6a900fe3d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
