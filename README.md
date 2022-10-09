# Test Driven Development with React

This project was created to demonstrate testing most common use cases in react applications. This app shows a pokemon if logged in with valid credentials.

- Form validation
- Api response with mocking
- Conditional Rendering
- UI state testing

### Tech stack used:

- [React App Boostrappted with CRA cli](https://reactjs.org/docs/create-a-new-react-app.html)
- [Ant D React UI Library](https://ant.design/docs/react/introduce)
- [Zustand State Management Library](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/)
- [Mock Service Worker](https://mswjs.io/)

## Clone The Project To Follow Along Better

1.  Clone this repo [ReactAntdTesting](https://github.com/DipeshGod/react_testing_antd.git)
2.  Open up the terminal in project folder
3.  ### `npm install`

## Spin Up The App and Test Suite

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

<br>

## Test Cases

### Login Form

- should show error message for no username input on submit button click
- should show error message for no password input on submit button click
- should show error for incorrect username input values
- should show error for incorrect password input values
- login button should be disabled when api is resolving

### App Component

- should call login api when form is submitted with correct inputs
- show pokemon component after login instead of login form (conditional rendering)

### Pokemon Component

- should show loading before pokemon is fetched
