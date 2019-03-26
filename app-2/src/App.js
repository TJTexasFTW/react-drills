import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            myArray: ["Dallas", "Fort Worth", "Bedford", "Irving", "Hurst", "Euless"]};
    }

    // handleChange(val) {
    //   this.setState({ userInput: val });
    // }

    makeList() {
      return this.state.myArray.map((items) => <li>{items}</li>)
    }

// let listItems = this.state.myArray.map((items) =>
//     <li>{items}</li>
// );

  render() {
    return (
      <div className="App">
      <h2>My List</h2>
        <ul>
        {/* ReactDOM.render({this.makeList}, 
        document.getElementById('root')); */}
      
      {this.makeList()}

        </ul>
      </div>
    );
  }
}

export default App;
