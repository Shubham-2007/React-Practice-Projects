import React from 'react';
import classes from './ErrorModal.module.css';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            
            <UserCard className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </UserCard>
        </div>
    )
}

export default ErrorModal;