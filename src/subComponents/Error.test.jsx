import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import ErrorMessage from './Error';
// import { initialState } from '../guideConstants';
 let stubState = {
  cities: ['Los Angeles', 'New York', 'Seoul', 'Japan', 'London', 'New Jersey'],
  dirty: false,
  currentInput: ''
}
let invalidErr = 'Valid search requires a minimum of three letters.';
describe('The ErrorMessage component', () => {

  it('When dirty is false, the Error message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={false} currentInput={"Orange"} cities={stubState.cities}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true but currentInput is less than 3, the Error Message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={"Orange"} cities={stubState.cities}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true and currentInput is greater than 3, the Error Message is not visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={'Orange'} cities={stubState.cities}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true and currentInput is less than 3, the Error Message is visible', () => {
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={'Or'} cities={stubState.cities}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).toEqual(invalidErr);
    }
  });
    it('Will display No result when the length requirement is met and no cities start with the currentInput', () => {
    let wrapper = shallow(<ErrorMessage cities={stubState.cities} dirty={stubState.dirty} currentInput={'Now'}/>);
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).toEqual('No Results');
    }
  });
});

