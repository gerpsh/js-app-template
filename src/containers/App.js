/*
  This file provides the top level container for the application
  Container components can be added under the Redux Provider component
*/


import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import * as reducers from '../reducers';

// create single reducer from each reducer defined in reducers/
const reducer = combineReducers(reducers);

// create Redux store based on master reducer
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {/*{() => <MainAppContainer /> }*/}
        </Provider>

        {/*delete the next line to remove the devtools console*/}
        {renderDevTools(store)}
      </div>
    );
  }
}
