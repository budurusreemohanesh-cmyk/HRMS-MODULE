"""021_hrms_expenses_assets

Revision ID: af050be391f5
Revises: 612f70d6a4bf
Create Date: 2026-06-16 12:23:44.337525

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'af050be391f5'
down_revision: Union[str, Sequence[str], None] = '612f70d6a4bf'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
