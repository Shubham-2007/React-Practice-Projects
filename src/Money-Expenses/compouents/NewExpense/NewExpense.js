import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
        </div>)
}

export default NewExpense;    