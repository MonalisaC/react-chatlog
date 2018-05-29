import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chats from './components/Chats';


class App extends Component {
  render() {
    console.log(chatMessages);
    const sender1 = chatMessages[0].sender;
    const sender2 = chatMessages[1].sender;

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Chat between {sender1} and {sender2}</h1>
      </header>
      <main className="App-main">
      {/*<Bubble sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}/>*/}
      <Chats messages={chatMessages}/>
      </main>
      </div>
    );
  }
}

export default App;
