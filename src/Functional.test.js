import {Chrome} from 'navalia';
import expect from 'expect';
function getInnerText(selector) {
  return document.querySelector(selector).text;
}


describe('The application', () => {
  let chrome ={}
  beforeEach(() => {
    chrome = new Chrome();
  }); 
  afterEach(() => {
    return chrome.done();
  });

  it('Title contains React App', () => {
    chrome.goto('http://localhost:3000/')
    .then(() => chrome.evaluate(getInnerText, 'title'))
    .then((result) => expect(result).toEqual('React App')); 

})
});