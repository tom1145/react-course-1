import React from "react";

import s from "./style.module.scss";

import ExpenseItem from "./Items/ExpenseItem";
import Card from "../Card/Card";
import { expensesData } from "../../static/ExpenseData";

function Expenses() {
  return (
    <Card className={s.expenses}>
      {expensesData.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
