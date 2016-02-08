JS Starter kit: Redux Boilerplate with Todo List Example
=====================

### Setup


To build and serve the TodoList example
```
npm install
cd example
DEBUG=true npm start
open http://localhost:3000
```

To build and serve your own app from `src/`:
```
npm install
DEBUG=true npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)


### Overview
1. #### Containers
  Containers are defined in `src/containers/`.
  These are the top level components that fetch data, holds state, and feed the properties of
  children components.  The render methods of container components will typical contain
  only one child component whose properties are derived from the container's state.
  For more on Containers, read [here](https://medium.com/@learnreact/container-components-c0e67432e005#.meh1s8cbj).

2. #### Actions
  Actions for each app are defined in `src/actions/` and exported as functions.  This
  allows them to be passed to components as prop values which can be bound to OnClick()
  events.

  Actions are as the name implies: they are the events that UI components use to
  interact with the server and alter state.

  While Actions are enumerated and mapped to functions in `src/actions/`, their actual behavior is implemented in
  `src/reducers` in a Reducer function.

  Each container should isolate its actions from other containers below it or beside it in the component hierarchy.
  Actions are referenced by a string, but for convenience, this project maps each action string to a constant which is referenced
  to execute each action.

3. #### Constants
  The `src/constants/` directory (as the name suggests) contains any global constants you'd like to
  use in the app.  In the TodoList example, the `ActionTypes.js` file defines constants
  for each Action type to provide a shorthand method for referencing Action types.

4. #### Reducers
  A **Reducer** function takes the state of the application and an Action, and returns
  a new state based on the Action and the previous state.  Remember, a Reducer is a pure function;
  it does not _change_ the state passed to it, but returns a new state.

  The actual behavior of an Action and its effect on application state is
  implemented in a Reducer function.  In the TodoList example, a single Reducer
  function contains a series of case statements, one for each possible Action.
  Under each case statement, the selected Action's behavior is implemented.

5. #### Components
  Each non-container React component is defined here. The `components/index.js` file provides a
  simple way to reference each component in other parts of the app by exporting from
  one location.

  Though not requirement, a good convention to follow is to create a directory for each component,
  which will contain a JS file that implements the component and a CSS file that
  provides styles for the component.

6. #### Store_Enhancer
  This is boilerplate to enable redux-devtools.  Redux-devtools is what enables the
  action/state console on the right side of the screen and is extremely useful for observing
  state changes and thus debugging.
