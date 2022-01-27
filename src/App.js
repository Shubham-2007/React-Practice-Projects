import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import TO_D0_List from "./TO-Do_List/App";
import Tic_Tact_To from "./Tic_Tact-To/App";
import Styled_To_Do from "./Styled_To-Do/App";
import Money_Expenses from "./Money-Expenses/App";
import Add_User_Info from "./Add-User-Info/App";
import Log_In_Out_Page from "./Log-In_Out-Page/App";
import { AuthContextProvider } from "./Log-In_Out-Page/store/auth-context";
import Food_Order_App from './Food-Order-App/App';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <div className="flex-container">
            <div className="flex-container_option"><NavLink to="/project1">TO-D0-List</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project2">Tic-Tact-To</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project3">Styled-To-Do</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project4">Money-Expenses</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project5">Add-User-Info</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project6">Log-In-Out-Page</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project7">Food-Order-App</NavLink></div>
          </div>
          <Routes>
            <Route path="/" element={<div>WelCome TO React Project</div>} />
            <Route path="/project1" element={<TO_D0_List />} />
            <Route path="/project2" element={<Tic_Tact_To />} />
            <Route path="/project3" element={<Styled_To_Do />} />
            <Route path="/project4" element={<Money_Expenses />} />
            <Route path="/project5" element={<Add_User_Info />} />
            <Route path="/project6" element={
              <AuthContextProvider>
                <Log_In_Out_Page />
              </AuthContextProvider>
            } />
            <Route path="/project7" element={<Food_Order_App />} />
          </Routes>
        </div>
      </
      BrowserRouter >
    );
  }
}
