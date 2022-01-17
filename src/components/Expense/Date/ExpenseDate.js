import React from "react";
import cs from "classnames";

import s from "./style.module.scss";

function ExpanseDate(props) {
  const day = props.date.toLocaleString("en-RO", { day: "2-digit" });
  const month = props.date.toLocaleString("en-RO", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className={cs(s.expenseDate, "d-flex flex-column")}>
      <div className={s.expenseDate__month}>{month}</div>
      <div className={s.expenseDate__year}>{year}</div>
      <div className={s.expenseDate__day}>{day}</div>
    </div>
  );
}

export default ExpanseDate;
