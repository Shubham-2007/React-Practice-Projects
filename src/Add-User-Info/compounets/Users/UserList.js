import React from 'react';
import UserCard from '../UI/UserCard/UserCard';
import classes from './UserList.module.css';

const UsersList = props => {
    return (
        <UserCard className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} year old)
                    </li>
                ))}
            </ul>
        </UserCard>
    )
}

export default UsersList;