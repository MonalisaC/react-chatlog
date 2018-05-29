import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Bubble from './components/Bubble';


class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
      <Bubble sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}/>

      </main>
      </div>
    );
  }
}

export default App;
