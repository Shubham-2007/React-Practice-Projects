// import logo from './logo.svg';
// import './App.css';
import NewComp from './newcomp';
import React, { Component } from "react";
import AddNinja from './addNinja'

class App extends Component {
  state = {
    new_Comp : [
      { name: 'Shu', age: 20, id: 1 },
      { name: 'Ayu', age: 25, id: 2 },
      { name: 'Dhr', age: 30, id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let new_Comp = [ ...this.state.new_Comp, ninja]
    // console.log(ninja)
    this.setState({
      new_Comp: new_Comp
    })
  }
  deleteNinja = (id) => {
    // console.log(id);
    let new_Comp = this.state.new_Comp.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      new_Comp: new_Comp
    })
  }
  componentDidMount(){
    console.log('Compoenet mount');
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Compouent Update');
    console.log(prevProps,prevState);

  }
  render() {
    return (
      <div className="App">
        <p>
        React Project 1
        </p>
        <NewComp deleteNinja = { this.deleteNinja } new_Comp = { this.state.new_Comp }/>  
        <AddNinja addNinja = { this.addNinja }/>  
     
      </div>
    );
  }
}

export default App;
