import React, { Component } from 'react';
import './App.css';
import Greeting_4 from './components/Greeting_4';



class App extends Component {
  render() {
    const greeting = "Welcome to react greeting_4"

    return (
      <div className="App">
       <Greeting_4 greeting = {greeting}/>
      </div>
    );
  }
}

export default App;
