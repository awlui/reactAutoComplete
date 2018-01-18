import React, { Component } from 'react';
import { Search, List, ErrorMessage } from '../subComponents';
import { initialState } from '../guideConstants';
import './Autocomplete.css';
class Autocomplete extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  render() {
    return (
      <div className="autoComplete">
        <ErrorMessage dirty={this.state.dirty} currentInput={this.state.currentInput} cities={this.state.cities}/>
        <Search refCallback={this.inputSetter} onSearchInput={this.onSearchInput}/>
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
  inputSetter = (ref) => {
    this._input = ref;
    this._input.focus();
  }
}

export default Autocomplete;
