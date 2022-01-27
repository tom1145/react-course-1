import React from "react";

import s from "./style.module.scss";

import ExpenseItem from "../Items/ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="text-white text-center">No expenses found</h2>;
  }

  return (
    <div className={s.expensesList}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
