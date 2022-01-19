import React from "react";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/Input/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="container">
      <h2>Expense List</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
