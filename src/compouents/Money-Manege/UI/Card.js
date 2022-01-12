import './Card.css'
import React, { Component } from "react";

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;