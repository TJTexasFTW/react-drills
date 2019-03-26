import React, { Component } from "react";
import "./App.css";
import Pic from "./Image";


class App extends Component {

  constructor() {
    super();
    this.state = {
        imageFile: "https://httpstatusdogs.com/img/503.jpg" 
      };
    
}


  render() {
    return (
    <div className="App">
      <Pic imageFile={this.state.imageFile}/>
    </div>

    );
  }
}

export default App;
