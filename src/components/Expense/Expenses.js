import React, { useState } from "react";

import s from "./style.module.scss";

import ExpensesFilter from "./Filter/ExpensesFilter";
import Card from "../Card/Card";
import ExpenseList from "./List/ExpenseList";
import { Modal } from "./Modal/Modal";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    // console.log(isModalOpen);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="container">
      <Card className={s.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterYearHandler}
        />
        <ExpenseList items={filteredExpenses} />
        <button type="button" onClick={openModal}>
          Open Modal
        </button>
        <Modal open={isModalOpen} onClose={onCloseModal} />
      </Card>
    </div>
  );
};

export default Expenses;
