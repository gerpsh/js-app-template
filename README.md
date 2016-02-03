JS Starter kit: Redux Boilerplate with Todo List Example
=====================

### Setup

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
  These are the top level components that hold state and feed the properties of
  children components.  In this example, App is the highest level component;
  TodoListApp is a sub-component that provides the todo list interface and its corresponding state.

2. #### Actions/Constants
  Actions for each app are defined in `src/actions/`.  Each container should isolate its
  actions from other containers not above it in the component hierarchy.  Actions are referenced by a string, but
  for convenience, this project maps each action string to a constant which is referenced
  to execute each action

3. #### Reducers
  Reducers are where initial state is set and the details of each action and how it
  modifies the state is specified.

4. #### Components
  Each non-container React component is defined here. The `index.js` file provides a
  simple way to reference each component in other parts of the app. *Note: I'd be
  in favor of putting each component into its own folder so referencing stylesheets is easier.
  Let me know what you think about this.*

5. #### Store_Enhancer
  This is boilerplate to enable redux-devtools.  Redux-devtools is what enables the
  action/state bar on the right side of the screen and is extremely useful for observing
  state changes and thus debugging.
