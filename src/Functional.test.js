import {Chrome} from 'navalia';
import expect from 'expect';
function getInnerText(selector) {
  return document.querySelector(selector).text;
}


describe('The application', () => {
  let chrome = {}
  let chromePromise = {};
  beforeEach(() => {
    chrome = new Chrome();
    chromePromise = chrome.goto('http://localhost:3000/');
  }); 
  afterEach(() => {
    return chrome.done();
  });

  it('Title contains React App', () => {
    chromePromise
      .then(() => chrome.evaluate(getInnerText, 'title'))
      .then((result) => expect(result).toEqual('React App')); 

  });
  it('Typing one letter into the input box reveals no search result', () => {
    chromePromise
      .then(() => chrome.type('.searchField', 'a'))
      .then(() => chrome.wait(500))
      .then(() => {
        let list = document.querySelector('ul.cityList');
        expect(list.getElementsByTagName("li").length).toEqual(0);
      })

  })
});