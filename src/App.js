import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      stateSrc: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png'
    }
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event){
    if(event.target.id == "button1"){
      this.setState({stateSrc:
        'https://cdn-enterprise.discourse.org/meteor/uploads/default/original/2X/d/d2429854bfd9be9877a74680d131d3bbc9875e76.png'});
    }else if (event.target.id == "button2") {
      this.setState({stateSrc:
        'https://www.bigbinary.com/assets/tech-logos/lg/react-logo-86474a1da3da32fe1a181093bdccdb2b6d69bb44bb627428f095cbac015f45a6.png'});
    }else if(event.target.id == "button3"){
      this.setState({stateSrc:
        'https://blog.owulveryck.info/assets/images/graphql-react-logos.png'});
    }
  }
  render(){
    return(
      <div>
        <div>
          <button id="button1"
          onClick={this.onClickButton}>
          Button1
          </button>
          <button id="button2"
          onClick={this.onClickButton}>
          Button2
          </button>
          <button id="button3"
          onClick={this.onClickButton}>
          Button3
          </button>
        </div>
        <div>
            <img src={this.state.stateSrc}/>
        </div>
      </div>
    );
  }
}

export default App;
