import React, { Component } from 'react';
import './App.css';
import Greeting_3 from './components/Greeting_3';


class App extends Component {
  render() {
    const greeting = "Welcome to react greeting_3"

    return (
      <div className="App">
       <Greeting_3 greeting = {greeting}/>
      </div>
    );
  }
}

export default App;
