import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the search component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
expect(document.querySelector('.searchField')).toBeTruthy();
console.log(document.querySelector('.searchField'), 'here')
  ReactDOM.unmountComponentAtNode(div);
})