"""020_hrms_payroll_statutory

Revision ID: 612f70d6a4bf
Revises: 283f79b5e812
Create Date: 2026-06-16 12:20:20.945921

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '612f70d6a4bf'
down_revision: Union[str, Sequence[str], None] = '283f79b5e812'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
