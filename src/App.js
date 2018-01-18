import React, { Component } from 'react';
import { Search, List, ErrorMessage } from './subComponents';
import Autocomplete from './Autocomplete/';
import { initialState } from './guideConstants';
import './App.css';

const App = () => (
  <div className="App">
  <header>
    <h1>Autocomplete</h1>
  </header>
  <Autocomplete />
  </div>
);

export default App;
