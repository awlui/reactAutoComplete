import React, { Component } from 'react';
import { Search, List, ErrorMessage } from '../subComponents';
import { initialState, CITIES } from '../guideConstants';
import './Autocomplete.css';
class Autocomplete extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  render() {
    return (
      <div className="autoComplete">
        <ErrorMessage 
        dirty={this.state.dirty} 
        currentInput={this.state.currentInput} 
        suggestedCities={this.state.suggestedCities}
        />
        <Search 
        onEnter={this.onEnter} 
        suggestedCities={this.state.suggestedCities} 
        currentInput={this.state.currentInput} 
        currentIndex={this.state.currentIndex} 
        refCallback={this.inputSetter} 
        onSearchInput={this.onSearchInput} 
        onArrowPress={this.onArrowPress} 
        onFocusOut={this.onFocusOut}
        />
        <List 
        suggestedCities={this.state.suggestedCities} 
        currentIndex={this.state.currentIndex} 
        currentInput={this.state.currentInput} 
        onListHover={this.onListHover}
        displayList={this.state.displayList}
        />
      </div>
    );
  }

  /* Custom Methods */

  onSearchInput = (event) => {
    const lowerCased = event.target.value.toLowerCase();
    this.setState({
      currentInput: lowerCased,
      suggestedCities: CITIES.filter((city) => city.startsWith(lowerCased)),
      dirty: this.state.dirty || lowerCased.length >= 3 ,
      currentIndex: undefined,
      displayList: true
    });
  }
  inputSetter = (ref) => {
    this._input = ref;
    this._input.focus();
  }
  onArrowPress = (event) => {
    const integerFlag = Number.isInteger(this.state.currentIndex);
    if (event.keyCode === 40) {
      this.onDownArrow(event, integerFlag);
    }
    if (event.keyCode === 38) {
      this.onUpArrow(event, integerFlag);
    }   
    if (event.keyCode === 13) {
      this.onEnter(event);
    }
  }
  onListHover = (i, event) => {
    this.setState({
      currentIndex: i
    });
  }
  onFocusOut = (event) => {
    this.setState({
      currentIndex: undefined,
    });
  }
  onEnter = (event) => {
    if (Number.isInteger(this.state.currentIndex)) {
      let newInput = this.state.suggestedCities[this.state.currentIndex];
      this.setState({
        currentInput: newInput,
        suggestedCities: CITIES.filter((city) => city.startsWith(newInput)),
        dirty: this.state.dirty || newInput.length >= 3 ,
        currentIndex: undefined,
        displayList: false
      });
    }
  }
  onUpArrow = (event, integerFlag) => {
    
      if (integerFlag && this.state.currentIndex !== 0) {
        this.setState({
          currentIndex: (this.state.currentIndex - 1 < 0) ? this.state.suggestedCities.length - 1 : this.state.currentIndex - 1
        });
      } else {
        this.setState({
          currentIndex: this.state.currentIndex !== 0 ? (this.state.suggestedCities.length - 1) : undefined
        });
      }
      event.preventDefault();
      return false;
  }
  onDownArrow = (event, integerFlag) => {
      if (integerFlag) {
        this.setState({
          currentIndex: (this.state.suggestedCities.length > this.state.currentIndex + 1) ? this.state.currentIndex + 1: undefined
        });
      } else {
        this.setState({
          currentIndex: 0
        });
      }
      event.preventDefault();
      return false;
  }
}

export default Autocomplete;

