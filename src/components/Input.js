import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render(){
    return(
      <div>
        <input
          id={this.props.id}
          type={this.props.type}/>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Input;
