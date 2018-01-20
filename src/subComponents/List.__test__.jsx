import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from './List';
import { initialState } from '../guideConstants';

const stubState = {
  suggestedCities: [],
  dirty: false,
  currentInput: '',
  displayList: true
}
const noOp = () => {};
describe('The List component', () => {
  it('Initially has no li elements', () => {
    let wrapper = shallow(<List {...initialState} />); //since the props that the list component takes map one to one to the app state, we can just use the spread operator on the state
    expect(wrapper.find('li').length).toEqual(0);
  });
  it('Will correctly display Stub Los Angeles when input Los', () => {

    let wrapper = shallow(<List suggestedCities={['Los Angeles']} dirty={stubState.dirty} currentInput={'Los'} displayList={stubState.displayList} onListHover={noOp}/>);
    expect(wrapper.find('li').length).toEqual(1);

  });
  it('Will correctly display Stub New York and New Jersey when input New', () => {

    let wrapper = shallow(<List suggestedCities={['New Jersey', 'New York']} dirty={stubState.dirty} currentInput={'New'} displayList={true} onListHover={noOp}/>);
    expect(wrapper.find('li').length).toEqual(2);
  });
});

