from abc import ABC, abstractmethod
from datetime import date
from decimal import Decimal
from typing import Dict, Any, List

class StatutoryRuleEngine(ABC):
    @abstractmethod
    def get_pf(self, as_of: date, company_id: int) -> Dict[str, Any]:
        pass

    @abstractmethod
    def get_esi(self, as_of: date, company_id: int) -> Dict[str, Any]:
        pass

    @abstractmethod
    def get_pt(self, as_of: date, state: str, gross: Decimal) -> Decimal:
        pass

    @abstractmethod
    def get_tds_monthly(self, ctx: Dict[str, Any]) -> Dict[str, Any]:
        pass

    @abstractmethod
    def get_gratuity(self, as_of: date) -> Dict[str, Any]:
        pass

    @abstractmethod
    def compute_payslip_deductions(self, ctx: Dict[str, Any]) -> Dict[str, Any]:
        """Returns amounts + rule_version_ids for snapshot."""
        pass
