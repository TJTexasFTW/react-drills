import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
      super();
      this.state = {
          myArray: ["Dallas", "Fort Worth", "Bedford", "Irving", "Hurst", "Euless"],
          filteredArray: []
        };
  }

  // handleChange(val) {
  //   this.setState({ userInput: val });
  // }

restoreStuff() {
  let original = ["Dallas", "Fort Worth", "Bedford", "Irving", "Hurst", "Euless"];
  this.setState({ myArray: original });

}

  makeList() {
    return this.state.myArray.map((items) => <li>{items}</li>);
  }

  filteredList() {
    return this.state.filteredArray.map((items) => <li>{items}</li>)
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterStuff(userInput) {
    // let unfiltered = this.unFilteredArray;
    // alert(userInput);
    var city = document.getElementById("cityInput").value;
    var filtered = [];
    // alert(city);
    for(let i = 0; i < this.state.myArray.length; i++){
        if (this.state.myArray[i].includes(city)) {
            
            filtered = this.state.myArray.slice(i, i+1);
            
        }
    } 
     this.setState({ filteredArray: filtered });
    //  alert("Filtered: " + filtered);
    //  document.getElementById("whatList").value = "{this.filteredList()}";
    //  return filtered;
    this.setState({ myArray: filtered });
    // this.filteredList;
}

// let listItems = this.state.myArray.map((items) =>
//     <li>{items}</li>
// );

render() {
  return (
    <div className="App">
    <h2>My List</h2>
    <input className="inputLine" id="cityInput" placeholder="Type city to remain. Must match EXACTLY!"></input>
      <ul>
      {/* ReactDOM.render({this.makeList}, 
      document.getElementById('root')); */}
    
      <a id="whatList">{this.makeList()}</a>

      </ul>
      <button onClick={ (e) => this.filterStuff(e.target.value) } >Narrow List</button>
      <button onClick={ (e) => this.restoreStuff(e.target.value) } >Restore List</button>
      
    </div>
  );
}
}

export default App;