# Cities Application
>A mini search engine w/ autocomplete built with React

## Initial Thoughts after reading specification
I have a tendency to over-engineer sometimes so when I saw that the project was react-based, I wanted to bring in redux for state management and rxjs for async management. But, this app is barebones as it gets so I wanted to halt the brakes and just utilize React with good coding practices. I want to start by fulfilling the requirements to the bare minimum and perhaps add animations/styling later. I will start off by including the Navalia, a headless chrome-style browser, and expect APIs to introduce e2e testing to the create-react-app workflow. I don't want to eject the scripts so I'll just loosely integrate Navalia. I will follow that up with unit tests and then minimal viable code in a TDD cycle. This workflow, called "Double loop" TDD was introduced to me by the book "Test-Driven Development with Python: Obey the Testing Goat", and I've been incorporating it into some of my newer projects...

## Other thoughts
1. Controlled or Uncontrolled Components
2. Stateful and stateless division of components

```
/* I split the testing commands by purpose: Unit testing and e2e */
npm run test // Unit tests
npm run func-test // Functional Tests after npm run start assuming localhost:3000 
```
## Middle of Project Thoughts
I have all but one of the features requested in the specification completed. The top level App Component is the only stateful component and it distributes to the other stateless components via props. The project is only using controlled components at the moment but it looks like I may need to use refs for the autofocus feature for the Search Component. I think I will just maintain statelessness of the Search Component and have the App component responsible for holding on to the ref and triggering the focus.