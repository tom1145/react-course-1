import React, { useState } from "react";

import s from "./style.module.scss";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      inputTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      inputAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      inputDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      title: userInput.inputTitle,
      amount: userInput.inputAmount,
      date: new Date(userInput.inputDate),
    };

    props.onSaveExpenseData(inputData);

    setUserInput({ inputTitle: "", inputAmount: "", inputDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={s.newExpense__controls}>
        <div className={s.newExpense__control}>
          <label>Title</label>
          <input
            type="text"
            value={userInput.inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={s.newExpense__control}>
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={userInput.inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={s.newExpense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            value={userInput.inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={s.newExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
