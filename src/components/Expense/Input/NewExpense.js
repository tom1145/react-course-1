import React from "react";

import s from "./style.module.scss";

import ExpenseForm from "./Form/ExpenseFrom";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={s.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
