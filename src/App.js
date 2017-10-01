import React, { Component } from 'react';
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {
  constructor(){
    super();

    this.state = {
      srcState : 'https://www.ecured.cu/images/thumb/a/a6/React-logo.png/260px-React-logo.png'
    }

    this.onClickChild = this.onClickChild.bind(this);
  }

  onClickChild(e){
    this.setState({srcState: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png'});
  }

  render(){
    return(
      <div>
        <Image id={1}
        onClickChild={this.onClickChild}
        src={this.state.srcState}/>
        <Input id={2} type="text"/>
      </div>
    );
  }
}

export default App;
