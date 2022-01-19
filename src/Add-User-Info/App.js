import React, { Component, useState } from "react";
import AddUser from "./compounets/Users/AddUser";
import UsersList from "./compounets/Users/UserList";
const App = () => {

  const [userList, setUserList] = useState([]);

  const addUserListHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge }
      ];
    })
    console.log(userList);
  }

  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={userList} />
    </div>
  );

}

export default App;
