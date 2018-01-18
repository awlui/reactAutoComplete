import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import Search from './Search';



describe('The Search component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });
  it('Clicking enter triggers preventDefault to prevent page refresh', () => {
    let mockCB = jest.fn();
    let eventStub = {
      preventDefault: mockCB
    }
    expect(mockCB.mock.calls.length).toEqual(0);
    wrapper.find('form').simulate('submit', eventStub);
    expect(mockCB.mock.calls.length).toEqual(1);
  });
});

