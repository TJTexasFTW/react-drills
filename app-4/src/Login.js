import React, { Component } from "react";

class Login extends Component {

    constructor() {
      super();
      this.state = {
          u: '', 
          p: ''
        };
      // this.evenOddCalc = this.evenOddCalc.bind(this);
  }
  
  userN(val) {
    this.setState({u: val});
  }
  
  pass(val) {
    this.setState({p: val})
  }
  
  alertInfo() {
    alert("User Name: " + this.state.u + "     Password: " + this.state.p);
  }
  
    render() {
      return (
        <div className="App">
  
  <input className="userName" onChange={ (e) => this.userN(e.target.value) } placeholder="User Name"></input>
  <input className="password" onChange={ (e) => this.pass(e.target.value) } placeholder="Password"></input>
  <button className="login" onClick={ () => { this.alertInfo(this.state.userInput) }}>Login</button>
  
         </div>
      );
    }
  }

export default Login;