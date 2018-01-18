import React, { Component } from 'react';
import { Search, List, ErrorMessage } from './subComponents';
import { initialState } from './guideConstants';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Autocomplete Me</h1>
        </header>
        <ErrorMessage dirty={this.state.dirty} currentInput={this.state.currentInput} />
        <Search onSearchInput={this.onSearchInput}/>
        <List cities={this.state.cities} currentInput={this.state.currentInput}/>

      </div>
    );
  }

  /* Custom Methods */

  onSearchInput = (event) => {
    this.setState({
      currentInput: event.target.value.toLowerCase()
    });
    if (!this.state.dirty && this.state.currentInput.length >= 3 ) {
      this.setState({
        dirty: true
      });
    }
  }
}

export default App;
