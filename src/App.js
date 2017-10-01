import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message0: "hello world",
      message1: "this is an example about state variables"
    };
    this.onClick = this.onClick.bind(this);
  }
    /*this function will change the value of the state*/
    onClick(e){
    this.setState({message1:"next state after click on text !!"});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.onClick}>{this.state.message0}</h2>
        <h4>{this.state.message1}</h4>
      </div>
    )
  }
}

export default App;
