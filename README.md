# React
### What did I learn (Key Concepts)

- The job of a React Developer:
    - Decide on Components.
    - Decide the State and where it lives.
    - What changes when State changes.

React, as a library has this peculiarities:
- [x] Yarn is created by Facebook
- [x] Never do "yarn eject" Because..
- [x] "react-scripts build" is optimized and constantly updated.
- [x] A React Component extended Class needs constructor and super()
- [x] Interpolation is to write plain javascript
- [x] JSX needs to be returned in a render() method
- [x] JSX uses it's own classes, for example className instead of class in html.
- [x] JSX uses className to distinguish from Class declaration.
- [x] React is one-way data binding.
- [x] When the state of a component changes, reload the component.
- [x] React intercept events using Virtual DOM. Optimizes process.
- [x] React is only to create UIs.
- [x] Extending react Components allows to use Lifecycle Methods.
- [x] We have to architect our app, react is just a library.
- [x] Components just need arrow functions to live.
- [x] Class Component and Functional Component
- [x] Using .js and .jsx doesn't matter, "react-scripts build" knows how to build it.
- [x] Better use props than props.children and render it.
- [x] To acces a "Monster" from props we need to use props.monster.anyting
- [x] Small components are easy to test
- [x] Modifying props (copy from state) does not affect State. One Way Data Flow.
- [x] SetState is Async. Also re-render all dependent Components.
- [x] Redux is an external library to use instead of React State.
- [x] React uses SyntheticEvents, fake events created from React to wrap real DOM events and manage with Virtual DOM.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
