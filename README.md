# Getting Started With Testing In React and Antd

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

## Test Cases:

### Login Form

- should show error message for no username input on submit button click
- should show error message for no password input on submit button click
- should show error for incorrect username input values
- should show error for incorrect password input values
- login button should be disabled when api is resolving
- should call login api when form is submitted with correct inputs
