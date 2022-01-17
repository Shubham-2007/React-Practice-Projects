import React, { Component, useState } from "react";
import Expense from './compouents/Expenses/Expense';
import NewExpense from "./compouents/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Shubham',
    amount: 50,
    date: new Date(2021, 1, 15),
  },
  {
    id: 'e2',
    title: 'Ayuhs',
    amount: 100,
    date: new Date(2020, 1, 15),
  },
  {
    id: 'e3',
    title: 'Krish',
    amount: 150,
    date: new Date(2020, 1, 15)
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
}

export default App;
