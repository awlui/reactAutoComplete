import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from './List';



describe('The List component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<List />);
  });
  it('Initially has no li elements', () => {
    expect(wrapper.find('li').length).toEqual(0);
  });
});

