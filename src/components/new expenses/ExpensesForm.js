import React from "react";
import "./ExpensesForm.css";
import { useState } from "react";

export default function ExpensesForm(props) {
  const [typedValue, setTypedValue] = useState("");
  const [typedAmount, setTypedAmount] = useState("");
  const [typedDate, setTypedDate] = useState("");

  const titleChangeHandler = (event) => setTypedValue(event.target.value);
  const amountChangeHandler = (event) => setTypedAmount(event.target.value);
  const dateChangeHandler = (event) => setTypedDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: typedValue,
      amount: typedAmount,
      date: new Date(typedDate),
    };
    props.onSaveExpenseData(expenseData);

    setTypedValue("");
    setTypedAmount("");
    setTypedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={typedValue} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={typedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="date"
            min="2014-01-01"
            max="2030-01-01"
            value={typedDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
}
