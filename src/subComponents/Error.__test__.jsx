import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import ErrorMessage from './Error';
// import { initialState } from '../guideConstants';
 let stubState = {
  suggestedCities: ['Los Angeles', 'New York', 'Seoul', 'Japan', 'London', 'New Jersey'],
  dirty: false,
  currentInput: ''
}
let invalidErr = 'Valid search requires a minimum of three letters.';
describe('The ErrorMessage component', () => {
  it('When dirty is false, the Error message is not visible', () => {
    const staticInput = 'Orange';
    const wrapper = shallow(<ErrorMessage dirty={false} currentInput={staticInput} suggestedCities={stubState.suggestedCities.filter((city) => city.startsWith(staticInput))}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true but currentInput is less than 3, the Error Message is not visible', () => {
    const staticInput = 'Orange';
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={staticInput} suggestedCities={stubState.suggestedCities.filter((city) => city.startsWith(staticInput))}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true and currentInput is greater than 3, the Error Message is not visible', () => {
    const staticInput = 'Orange';
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={'Orange'} suggestedCities={stubState.suggestedCities.filter((city) => city.startsWith(staticInput))}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).not.toEqual(invalidErr);
    }
  });
  it('When dirty is true and currentInput is less than 3, the Error Message is visible', () => {
    const staticInput = 'Or';
    const wrapper = shallow(<ErrorMessage dirty={true} currentInput={staticInput} suggestedCities={stubState.suggestedCities.filter((city) => city.startsWith(staticInput))}/>); 
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).toEqual(invalidErr);
    }
  });
    it('Will display No result when the length requirement is met and no cities start with the currentInput', () => {
    let staticInput = 'Now';
    let wrapper = shallow(<ErrorMessage suggestedCities={stubState.suggestedCities.filter((val) => val.startsWith(staticInput))} dirty={stubState.dirty} currentInput={staticInput}/>);
    expect(wrapper.children.length).toEqual(1);
    if (wrapper.childAt(0)) {
      expect(wrapper.childAt(0).text()).toEqual('No Results');
    }
  });
});

