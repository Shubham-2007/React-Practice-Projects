import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpeseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expense-list_fallback'>Found No Expense</h2>
    }
    return <ul className='expense-list'>
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
};

export default ExpeseList;