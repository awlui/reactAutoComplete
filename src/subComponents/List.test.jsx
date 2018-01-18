import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from './List';
import { initialState } from '../guideConstants';
 

describe('The List component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<List {...initialState} />); //since the props that the list component takes map one to one to the app state, we can just use the spread operator on the state
  });
  it('Initially has no li elements', () => {
    expect(wrapper.find('li').length).toEqual(0);
  });
});

