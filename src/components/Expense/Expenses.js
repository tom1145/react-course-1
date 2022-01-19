import React, { useState } from "react";

import s from "./style.module.scss";

import ExpenseItem from "./Items/ExpenseItem";
import ExpensesFilter from "./Filter/ExpensesFilter";
import Card from "../Card/Card";
import { expensesData } from "../../static/ExpenseData";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="container">
      <Card className={s.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterYearHandler}
        />
        {expensesData.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
