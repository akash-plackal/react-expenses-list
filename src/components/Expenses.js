import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "../css/Expenses.css";
import Card from "./Card.js";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setSelectedYear] = useState("2020");

  const anyFun = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilteredYear={anyFun} />
      {props.expenses.map((a) => {
        return (
          <ExpensesList
            title={a.title}
            date={a.date}
            amt={a.amount}
            key={Math.floor(Math.random() * 1000)}
          />
        );
      })}
    </Card>
  );
}
