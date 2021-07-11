import React from "react";
import ExpensesList from "./ExpensesList";
import "../css/Expenses.css";
import Card from "./Card.js";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpensesList
        title={expenses[0].title}
        date={expenses[0].date}
        amt={expenses[0].amount}
      />
      <ExpensesList
        title={expenses[1].title}
        date={expenses[1].date}
        amt={expenses[1].amount}
      />
      <ExpensesList
        title={expenses[2].title}
        date={expenses[2].date}
        amt={expenses[2].amount}
      />
    </Card>
  );
}
