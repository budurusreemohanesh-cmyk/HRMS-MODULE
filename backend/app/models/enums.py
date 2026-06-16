import enum

class HrStatus(str, enum.Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"
    LEFT = "left"

class RbacRole(str, enum.Enum):
    HR_ADMIN = "HR_ADMIN"
    PAYROLL_ADMIN = "PAYROLL_ADMIN"
    MANAGER = "MANAGER"
    EMPLOYEE = "EMPLOYEE"
