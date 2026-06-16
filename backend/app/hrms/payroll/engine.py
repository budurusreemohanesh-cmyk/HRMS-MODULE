import ast
import operator
from typing import Dict, Any

# Map AST operators to Python functions securely
_OP_MAP = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
    ast.USub: operator.neg,
}

def _eval_ast(node: ast.AST, variables: Dict[str, float]) -> float:
    if isinstance(node, ast.Num): # < Python 3.8
        return node.n
    elif isinstance(node, ast.Constant): # >= Python 3.8
        if isinstance(node.value, (int, float)):
            return float(node.value)
        raise ValueError(f"Unsupported constant type: {type(node.value)}")
    elif isinstance(node, ast.Name):
        if node.id in variables:
            return float(variables[node.id])
        raise ValueError(f"Undefined variable in formula: {node.id}")
    elif isinstance(node, ast.BinOp):
        left = _eval_ast(node.left, variables)
        right = _eval_ast(node.right, variables)
        op_type = type(node.op)
        if op_type in _OP_MAP:
            return _OP_MAP[op_type](left, right)
        raise ValueError(f"Unsupported binary operator: {op_type}")
    elif isinstance(node, ast.UnaryOp):
        operand = _eval_ast(node.operand, variables)
        op_type = type(node.op)
        if op_type in _OP_MAP:
            return _OP_MAP[op_type](operand)
        raise ValueError(f"Unsupported unary operator: {op_type}")
    else:
        raise ValueError(f"Unsupported AST node: {type(node)}")

def evaluate_formula(formula: str, variables: Dict[str, float]) -> float:
    """
    Safely evaluate a mathematical formula string using an AST parser.
    Supports basic arithmetic (+, -, *, /) and variables.
    """
    try:
        # Parse the string into an AST
        # mode='eval' ensures we only process a single expression
        tree = ast.parse(formula, mode='eval')
        return _eval_ast(tree.body, variables)
    except Exception as e:
        raise ValueError(f"Error evaluating formula '{formula}': {str(e)}")

def validate_50_percent_wage_rule(basic_wage: float, gross_pay: float) -> bool:
    """
    Enforces the Indian labor law where Basic + DA must be >= 50% of Total Gross Salary.
    """
    if gross_pay <= 0:
        return True
    return (basic_wage / gross_pay) >= 0.50
