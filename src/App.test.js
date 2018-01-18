import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Search, List } from './subComponents';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('The application component tree', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('Renders the search component', () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });
  it('Renders the list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
});

