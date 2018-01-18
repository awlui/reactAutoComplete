import React from 'react';
import Autocomplete from './Autocomplete';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Search, List } from '../subComponents';
import { CITIES } from '../guideConstants';



describe('The autocomplete component tree', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Autocomplete />);
  })
  it('Renders the search component', () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });
  it('Renders the list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
});

describe('The autocomplete component instance', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Autocomplete />);
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
  it('Passes the inputSetter method to the Search Component which will set _input on the autocomplete instance and trigger the input focus on initial render', () => {
    let mockCB = jest.fn();
    let stubRef = {
      focus: mockCB
    }
    expect(mockCB.mock.calls.length).toEqual(0);
    wrapper.instance().inputSetter(stubRef);
    expect(mockCB.mock.calls.length).toEqual(1);
  });
})