import React, { Component, useState } from "react";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseList from './ExpenseList';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selestedYear) => {
        setFilteredYear(selestedYear);
        // console.log(filteredYear);
    }

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // console.log(props.items);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpense} />
                <ExpenseList items={filteredExpense} />
            </Card>
        </div>
    );
}

export default Expenses;
