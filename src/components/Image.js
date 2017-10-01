import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render(){
    return(
      <div>
        <p>{"printing the id: "+ this.props.id}</p>
        <img src={this.props.src}/>
      </div>
    );
  }
}

Image.proptypes = {
  id: PropTypes.number.isRequiered,
  src: PropTypes.string.isRequired
}

export default Image;
