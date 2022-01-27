import React, { useState } from "react";

import s from "./style.module.scss";

import ExpenseForm from "./Form/ExpenseFrom";

const NewExpense = (props) => {
  const [showInput, setShowInput] = useState(false);
  const showInputHandler = () => {
    setShowInput(!showInput);
  };

  const closeInput = () => {
    setShowInput(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowInput(false);
  };

  return (
    <div className={s.newExpense}>
      {showInput === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={closeInput}
        />
      ) : (
        <div className="">
          <button
            className={(s.newExpense, s.btnBlock)}
            onClick={showInputHandler}
          >
            Add new expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
