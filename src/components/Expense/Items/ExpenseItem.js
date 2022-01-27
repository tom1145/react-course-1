import React from "react";

import s from "./style.module.scss";

import ExpanseDate from "./Date/ExpenseDate";
import Card from "../../Card/Card";

function ExpenseItem(props) {
  return (
    <Card className={s.expenseItem}>
      <ExpanseDate date={props.date} />
      {console.log(props.date.year)}
      <div className={s.expenseItemDescription}>
        <h2>{props.title}</h2>
        <div className={s.expenseItemPrice}>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
