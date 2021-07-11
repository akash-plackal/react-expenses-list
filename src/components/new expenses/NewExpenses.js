import React from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

export default function NewExpenses(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
