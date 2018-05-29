import React, { Component } from 'react';
import './Bubble.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

class Bubble extends React.Component {
  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;
    let senderClass = "chat-entry";
    if (sender == "Vladimir") {
      senderClass += " local";
    } else if (sender == "Estragon") {
      senderClass += " remote";
    }

    return (
      <div className={senderClass}>
      <p className="entry-name">{sender}</p>
      <div className="entry-bubble">
      <p className="entry-body">{body}</p>
      <div className="entry-time"><Timestamp time={timeStamp}/></div>
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
