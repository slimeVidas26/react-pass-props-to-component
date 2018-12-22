import React, { Component } from 'react';
import './App.css';
import Greeting_6 from './components/Greeting_6';



class App extends Component {
  render() {
    const greeting = "Welcome to react greeting_6"

    return (
      <div className="App">
       <Greeting_6 greeting = {{text :greeting}}/>
      </div>
    );
  }
}

export default App;
