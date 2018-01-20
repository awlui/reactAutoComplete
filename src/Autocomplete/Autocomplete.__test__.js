import React from 'react';
import Autocomplete from './Autocomplete';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
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
      suggestedCities: [],
      currentInput: '',
      dirty: false,
      currentIndex: undefined,
      displayList: true
    });
  });
  describe('The onSearchInput method', () => {
    it('Passes the onInputChange method to the Search Component as a prop', () => {
      expect(wrapper.find(Search).props().onSearchInput).toEqual(wrapper.instance().onSearchInput);
    });
    it('The onSearchInput method will change the currentInput value in the app component state', () => {
      expect(wrapper.state().currentInput).toEqual('');
      wrapper.instance().onSearchInput({target: { value: 'dummy value'}});
      expect(wrapper.state().currentInput).toEqual('dummy value');
    });
  });
  describe('The inputSetter method', () => {
    it('Passes the inputSetter method to the Search Component as a prop, as refCallback', () => {
      expect(wrapper.find(Search).props().refCallback).toEqual(wrapper.instance().inputSetter);
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
  describe('The onArrowPress method', () => {
    it('Passes the onArrowPress method to the Search Component as a prop', () => {
      expect(wrapper.find(Search).props().onArrowPress).toEqual(wrapper.instance().onArrowPress);
    });
    it('Calls the onUpArrow method on upArrowPress', () => {
      wrapper = mount(<Autocomplete />);
      let mockCB = jest.fn();
      wrapper.instance().onUpArrow = mockCB;
      expect(mockCB.mock.calls.length).toEqual(0);
      wrapper.find(Search).find('input').simulate('keyDown', { keyCode: 38 });
      expect(mockCB.mock.calls.length).toEqual(1);
    });
    it('Calls the onDownArrow method on downArrowPress', () => {
      wrapper = mount(<Autocomplete />);
      let mockCB = jest.fn();
      wrapper.instance().onDownArrow = mockCB;
      expect(mockCB.mock.calls.length).toEqual(0);
      wrapper.find(Search).find('input').simulate('keyDown', { keyCode: 40 });
      expect(mockCB.mock.calls.length).toEqual(1);
    });
    it('Calls the onEnter method on enterPress', () => {
      wrapper = mount(<Autocomplete />);
      let mockCB = jest.fn();
      wrapper.instance().onEnter = mockCB;
      expect(mockCB.mock.calls.length).toEqual(0);
      wrapper.find(Search).find('input').simulate('keyDown', { keyCode: 13 });
      expect(mockCB.mock.calls.length).toEqual(1);
    });
  });


})