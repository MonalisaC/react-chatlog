import React, { Component } from 'react';
import Bubble from './Bubble';

class Chats extends React.Component {
  render() {
    // Fill in your code here
    const messages = this.props.messages;

    return (messages.map((message) => {
      return (
        <Bubble
        key={message.timeStamp}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        />
      );
    }));
  }
}

export default Chats;
