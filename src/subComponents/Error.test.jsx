import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import ErrorMessage from './Error';
// import { initialState } from '../guideConstants';
 

describe('The ErrorMessage component', () => {

  it('When dirty is false, the Error message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={false} currentInput={"Orange"} />); 
    expect(wrapper.childAt(0).hasClass('errorInActive')).toEqual(true);
    expect(wrapper.childAt(0).hasClass('errorActive')).toEqual(false);
  });
  it('When dirty is true but currentInput is less than 3, the Error Message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={"Orange"} />); 
    expect(wrapper.childAt(0).hasClass('errorInActive')).toEqual(true);
    expect(wrapper.childAt(0).hasClass('errorActive')).toEqual(false);
  });
  it('When dirty is true and currentInput is greater than 3, the Error Message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={'Orange'} />); 
    expect(wrapper.childAt(0).hasClass('errorInActive')).toEqual(true);
    expect(wrapper.childAt(0).hasClass('errorActive')).toEqual(false);
  });
  it('When dirty is true and currentInput is less than 3, the Error Message is visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={'Or'} />); 
    expect(wrapper.childAt(0).hasClass('errorActive')).toEqual(true);
    expect(wrapper.childAt(0).hasClass('errorInActive')).toEqual(false);
  });
});

