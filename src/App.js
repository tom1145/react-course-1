import React, { useState } from "react";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/Input/NewExpense";
import { expensesData } from "./static/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <h2 className="text-white text-center">Expense List</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
