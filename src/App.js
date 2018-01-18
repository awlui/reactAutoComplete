import React, { Component } from 'react';
import { Search, List } from './subComponents';
import { CITIES } from './guideConstants';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: CITIES,
      currentInput: '',
      dirty: false
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Autocomplete Me</h1>
        </header>
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
