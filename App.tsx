/* eslint-disable react/jsx-fragments */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import LandingPage from './src/views/LandingPage';

let RootStack = createSwitchNavigator({
  Landing: LandingPage,
});

let Navigation = createAppContainer(RootStack);
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
