import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "../css/Expenses.css";
import Card from "./Card.js";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filteredYear, setSelectedYear] = useState("2020");

  const anyFun = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilteredYear={anyFun} />
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
