import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from './List';
import { initialState } from '../guideConstants';

let stubState = {
  cities: ['Los Angeles', 'New York', 'Seoul', 'Japan', 'London', 'New Jersey'],
  dirty: false,
  currentInput: ''
}

describe('The List component', () => {
  it('Initially has no li elements', () => {
    let wrapper = shallow(<List {...initialState} />); //since the props that the list component takes map one to one to the app state, we can just use the spread operator on the state
    expect(wrapper.find('li').length).toEqual(0);
  });
  it('Will correctly display Stub Los Angeles when input Los', () => {

    let wrapper = shallow(<List cities={stubState.cities} dirty={stubState.dirty} currentInput={'Los'}/>);
    expect(wrapper.find('li').length).toEqual(1);
  });
  it('Will correctly display Stub New York and New Jersey when input New', () => {

    let wrapper = shallow(<List cities={stubState.cities} dirty={stubState.dirty} currentInput={'New'}/>);
    expect(wrapper.find('li').length).toEqual(2);
  });
  it('Will display No result when the length requirement is met and no cities start with the currentInput', () => {
    let wrapper = shallow(<List cities={stubState.cities} dirty={stubState.dirty} currentInput={'Now'}/>);
    expect(wrapper.find('div.errorMessage').length).toEqual(1);
  });
});

