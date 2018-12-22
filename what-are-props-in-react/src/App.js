import React, { Component } from 'react';
import './App.css';
import Greeting_5 from './components/Greeting_5';



class App extends Component {
  render() {
    const greeting = "Welcome to react greeting_5"

    return (
      <div className="App">
       <Greeting_5 greeting = {greeting}/>
      </div>
    );
  }
}

export default App;
