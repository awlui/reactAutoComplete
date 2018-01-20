# Cities Application
>A mini search engine w/ autocomplete built with React

## Update:
>I pushed a few changes after sending Mallory the github link. The pushed code is still well before the deadline. The master branch contains the untouched code that was there when I gave Mallory the link. The 'googlemimic' branch contains my updates. The updates include:
>1. Fixing up the testing infrastructure, which was double-running the unit tests.
>2. Reverse engineered some of Google search's UX such as up/down arrow navigation through autocomplete list.
>3. The amount of props being passed through increased significantly because of 2. so I added Prop-types to keep everything in check.
>4. Wrote some more tests to keep watch of updates as well as adjust old ones to account for refactoring. My coverage is lower than I'd like but I ran out of time.

## Experience w/ React
I have written a few projects with React and Angular in the past. I wrote a simple SPA engine for a previous interview challenge as well. React is by far my favorite due to its simplicity and the clean code that comes from it. I came across declarative programming first with Angular but React really made it cool. React, as well as redux, have made me a better programmer in general I think. I have a few libraries on NPM that revolve around the React/Redux ecosystem. Usually I will use them in tandem but it looks like for this project, I won't be needing redux.

## Initial Thoughts after reading specification
I have a tendency to over-engineer sometimes so when I saw that the project was react-based, I wanted to bring in redux for state management and rxjs for async management. But, this app is as barebones as it gets so I wanted to halt the brakes and just utilize React with good coding practices. I want to start by fulfilling the requirements to the bare minimum and perhaps add animations/styling later. I will start off by including the Navalia(Update: I have removed Navalia. May integrate Nightwatch in the future), a headless chrome-style browser, and expect APIs to introduce e2e testing to the create-react-app workflow. I don't want to eject the scripts so I'll just loosely integrate Navalia. I will follow that up with unit tests and then minimal viable code in a TDD cycle. This workflow, called "Double loop" TDD was introduced to me by the book "Test-Driven Development with Python: Obey the Testing Goat", and I've been incorporating it into some of my newer projects outside of Javascript...

## Thoughts while building application
1. Given the minimal nesting of React Components and Elements, I thought to utilize just one React Stateful Component, the Autocomplete Component. That component will be responsible for passing the state down via props to the stateless functional components. The App Component itself will be a stateless component that will house the stateful Autocomplete component.
2. I wanted to code as idiomatically React as possible and stay away from uncontrolled components but it looks like I will have to utilize refs to fulfill the autofocus requirement.
3. I wrote ample tests and kept code as single-purpose and modular in design as possible. Clean code over commenting, though to be honest I go back and forth on this on each project. Clean code is always a necessity but comments can seem to hinder readability at times.

## BUILD
> You can build the app yourself or checkout the gh-pages @ www.andy-lui.com/reactAutoComplete/
```
/* How to build this application */
git clone https://github.com/awlui/reactAutoComplete.git
cd reactAutoComplete/
npm install // to install all npm modules specified in package.json
npm run test // Optional: run the unit tests, may need to remove git history(.git) to see running tests, otherwise jest will notice no changes and not run.
npm run start // view the application from the development server OR
npm run build // package the application with react-scripts, a webpack wrapper.

```

## UX notes
1. I keep a boolean state, 'dirty', to notify whether a user has already typed to/past the three letter character mark. Thereafter, until a refresh, every time the user reduces the input to less than 3 characters, a warning message will be displayed. I wanted to keep the form clean until actual user interaction.
2. I bolden the characters that have been typed within the city names being displayed.


## A few thoughts
1. I removed the Functional Tests because the Navalia API was a bit hairy to deal with. I've used protractor with Angular in the past which was fairly intuitive. More recently, I 've been learning functional testing
with python which is fairly easy to use as well. I'll have to dig in to Nightwatch.js for awhile before I feel confident in really bringing e2e into my next project, at least with javascript. The attempt at Functional test integration drained more time than I would have liked but I learned more about E2E testing for javascript outside of Angular/Protractor and Python/Django, so I guess it was worth it.
2. I isolated the Autocomplete component from the app itself to promote reusability.