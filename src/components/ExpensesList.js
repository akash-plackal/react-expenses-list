import React, { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import "../css/ExpensesList.css";
import Card from "./Card";

export default function ExpensesList({ title, amt, date }) {
  const [name, setName] = useState(title);
  const clickHandler = () => setName("updated");

  return (
    <Card className="expense-item">
      <ExpensesDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{amt}</div>
        <button onClick={clickHandler}>change name</button>
      </div>
    </Card>
  );
}
