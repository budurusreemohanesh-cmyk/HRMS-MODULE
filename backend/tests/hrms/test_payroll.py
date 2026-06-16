import pytest
from app.hrms.payroll.engine import evaluate_formula, validate_50_percent_wage_rule

def test_ast_evaluator_valid_math():
    variables = {
        "base": 10000,
        "da": 2000
    }
    
    # Simple calculation
    assert evaluate_formula("base * 0.12", variables) == 1200.0
    
    # Complex calculation
    assert evaluate_formula("(base + da) * 0.05", variables) == 600.0

def test_ast_evaluator_security():
    variables = {"base": 10000}
    
    # Attempt malicious execution
    with pytest.raises(ValueError, match="Unsupported AST node"):
        evaluate_formula("__import__('os').system('ls')", variables)

def test_50_percent_wage_rule():
    # Pass: Basic is exactly 50%
    assert validate_50_percent_wage_rule(basic_wage=5000, gross_pay=10000) == True
    
    # Pass: Basic is > 50%
    assert validate_50_percent_wage_rule(basic_wage=6000, gross_pay=10000) == True
    
    # Fail: Basic is < 50%
    assert validate_50_percent_wage_rule(basic_wage=4000, gross_pay=10000) == False
