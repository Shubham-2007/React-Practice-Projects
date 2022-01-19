import React from 'react';
import claases from "./Button.module.css";

const Button = props => {
    return (
        <button
            className={`${claases.button}`}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;