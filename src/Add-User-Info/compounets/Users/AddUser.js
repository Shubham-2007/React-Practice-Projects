import React, { Component, useState, useRef } from "react";
import UserCard from "../UI/UserCard/UserCard";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helper/Wrapper";
const AddUser = (props) => {

    const nameInputRef = useRef(); //alterante of (usestate)
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserage, setEnteredUserage] = useState('');

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsernameRef = nameInputRef.current.value;
        const enteredUserageRef = ageInputRef.current.value;

        if (enteredUsernameRef.trim().length === 0 ||
            enteredUserageRef.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid naem and age(non-empty values).'
            })
            return;
        }

        if (+enteredUserageRef < 1) {
            setError({
                title: 'Invalid Age Input',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        // console.log(enteredUsername, enteredUserage);
        // props.onAddUser(enteredUsername, enteredUserage);
        // setEnteredUsername('');
        // setEnteredUserage('');
        console.log(enteredUsernameRef, enteredUserageRef);  
        props.onAddUser(enteredUsernameRef, enteredUserageRef);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const userageChangeHandler = (event) => {
    //     setEnteredUserage(event.target.value);
    // };     

    const errorHandler = () => {
        setError(null);
    }

    return (<div>
        {error && (<ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
        />)}

        <UserCard className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    // value={enteredUsername}
                    // onChange={usernameChangeHandler}
                    ref={nameInputRef}
                />
                <label htmlFor="age">Age (years)</label>
                <input
                    id="age"
                    type="number"
                    // value={enteredUserage}
                    // onChange={userageChangeHandler}
                    ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
        </UserCard>
    </div>);
}

export default AddUser;
