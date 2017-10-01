import React, { Component } from 'react';
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {
  render(){
    return(
      <div>
        <Image id={1} src=""/>
        <Input id={2} type="text"/>
      </div>
    );
  }
}

export default App;
