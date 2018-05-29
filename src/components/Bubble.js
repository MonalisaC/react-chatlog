import React, { Component } from 'react';
import './Bubble.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

class Bubble extends React.Component {
  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;
    return (
      <div>
      <p>{sender}</p>
      <div>
      <p>{body}</p>
      <Timestamp time={timeStamp}/>
      </div>
      </div>
    );
  }
}

Bubble.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default Bubble;
