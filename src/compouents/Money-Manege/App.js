import React, { Component } from "react";
import Card from "./UI/Card";
import ExpenseItem from './Expenses/ExpenseItem';
import NewExpense from "./NewExpense/NewExpense";
const App = () => {


  const expenseItem = [
    {
      id: 'e1',
      title: 'Shubham',
      amount: 50,
      date: new Date(2020, 1, 15),
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
  ]

  const addExpenseHandler = expense => {
    console.log(expense);
  }
  return (
    <Card className="expenses">
      <p className="project-number">
        React Project 3
      </p>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItem
        title={expenseItem[0].title}
        amount={expenseItem[0].amount}
        date={expenseItem[0].date}
      />
      <ExpenseItem
        title={expenseItem[1].title}
        amount={expenseItem[1].amount}
        date={expenseItem[1].date}
      />
      <ExpenseItem
        title={expenseItem[2].title}
        amount={expenseItem[2].amount}
        date={expenseItem[2].date}
      />
    </Card>
  );
}

export default App;
