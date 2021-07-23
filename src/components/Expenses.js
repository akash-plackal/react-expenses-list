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

  const filteredList = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilteredYear={anyFun} />
      {filteredList.length === 0 ? (
        <p>no expenses for the selected year</p>
      ) : (
        filteredList.map((a) => {
          return (
            <ExpensesList
              title={a.title}
              date={a.date}
              amt={a.amount}
              key={a.id}
            />
          );
        })
      )}
    </Card>
  );
}
