import classes from './Modal.module.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose} />
    )
};

const ModalOverlays = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const protalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, protalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, protalElement)}
    </Fragment>
};

export default Modal;