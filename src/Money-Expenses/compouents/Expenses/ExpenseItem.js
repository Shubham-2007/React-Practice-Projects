import "./ExpenseItem.css";
import ExpenseData from './ExpenseData';
import Card from "../UI/Card";
import React, { Component, useState } from "react";

function ExpenseItem(props) {
    // const expenseDate = new Date(2020, 10, 20);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 256.32
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("yash");
    // }
    // console.log('ExpenseItem');
    return (
        <li>
            <Card className="expense-item">
                <ExpenseData date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        $ {props.amount}
                    </div>
                </div>
                {/* <button onClick={console.log({ title }), clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;