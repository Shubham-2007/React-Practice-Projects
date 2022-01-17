import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import TO_D0_List from "./TO-Do_List/App";
import Tic_Tact_To from "./Tic_Tact-To/App";
import Styled_To_Do from "./Styled_To-Do/App";
import Money_Expenses from "./Money-Expenses/App";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <div className="flex-container">
            <div className="flex-container_option"><NavLink to="/project1" style={{ }}>TO-D0-List</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project2">Tic-Tact-To</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project3">Styled-To-Do</NavLink></div>
            <div className="flex-container_option"><NavLink to="/project4">Money-Expenses</NavLink></div>
          </div>
          <Routes>
            <Route path="/" element={<div>WelCome TO React Project</div>} />
            <Route path="/project1" element={<TO_D0_List />} />
            <Route path="/project2" element={<Tic_Tact_To />} />
            <Route path="/project3" element={<Styled_To_Do />} />
            <Route path="/project4" element={<Money_Expenses />} />
          </Routes>
        </div>
      </BrowserRouter >
    );
  }
}
