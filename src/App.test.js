import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Search, List } from './subComponents';
import { CITIES } from './guideConstants';

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

describe('The application component instance', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('Contains the correct initial state', () => {
    expect(wrapper.state()).toEqual({
      cities: CITIES,
      currentInput: '',
      dirty: false
    });
  });
  it('Passes the onInputChange method to the Search Component as a prop', () => {
    expect(wrapper.find(Search).props().onSearchInput).toEqual(wrapper.instance().onSearchInput);
  });
  it('The onSearchInput method will change the currentInput value in the app component state', () => {
    expect(wrapper.state().currentInput).toEqual('');
    wrapper.instance().onSearchInput({target: { value: 'dummy value'}});
    expect(wrapper.state().currentInput).toEqual('dummy value');

  });
})