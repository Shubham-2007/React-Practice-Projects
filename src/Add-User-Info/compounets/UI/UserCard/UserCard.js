import React from 'react';
import styles from "./UserCard.module.css";

const UserCard = props => {
    return (
        <div className={`${styles.usercard} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default UserCard;