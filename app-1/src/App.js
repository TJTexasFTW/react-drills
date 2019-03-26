import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      userInput: ''}

    }

    handleChange(val) {
      this.setState({ userInput: val });
    }


  
  
  
  
  render() {

    return (

    // <div id="mainDiv">
      <div className="TBD">
        <h4>Basic Input Box</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } placeholder="Type Something to be Displayed Below"></input>
        <h6>RESULTS:</h6>
        <span className="resultsBox">{this.state.userInput}</span>
      </div>
    // </div>
    );
  }
}

export default App;
