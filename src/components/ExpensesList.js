import React from "react";
import ExpensesDate from "./ExpensesDate";
import "../css/ExpensesList.css";
import Card from "./Card";

export default function ExpensesList({ title, amt, date }) {
  return (
    <Card className="expense-item">
      <ExpensesDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amt}</div>
      </div>
    </Card>
  );
}
