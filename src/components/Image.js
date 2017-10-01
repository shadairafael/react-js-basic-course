import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render(){
    return(
      <div>
        <p>{"id: "+ this.props.id}</p>
        <image src={this.props.src}/>
      </div>
    );
  }
}

Image.proptypes = {
  id: PropTypes.number.isRequiered,
  src: PropTypes.string.isRequired
}

export default Image;
