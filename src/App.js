import React, { Component } from 'react';
import { Search } from './subComponents';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Autocomplete Me</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
