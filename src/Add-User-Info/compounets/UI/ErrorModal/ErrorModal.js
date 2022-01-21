import React from 'react';
import classes from './ErrorModal.module.css';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import ReactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = props => {
    return (
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
    )
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
} 

export default ErrorModal;