import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(){
      super();
      this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    this.props.onClickChild();
  }
  render(){
    return(
      <div onClick={this.onClick}>
        <p>{"printing the id: "+ this.props.id}</p>
        <img src={this.props.src}/>
      </div>
    );
  }
}

Image.proptypes = {
  id: PropTypes.number.isRequiered,
  src: PropTypes.string.isRequired,
  onClickChild: PropTypes.func.isRequired
}

export default Image;
