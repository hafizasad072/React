import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Person name="Asad" age="20"/>
      </div>
    );
  }
}

export default App;
