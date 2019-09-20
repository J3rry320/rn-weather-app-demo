/* eslint-disable react/jsx-fragments */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LandingPage from './src/views/LandingPage';
import {Provider} from 'react-redux';
import {store} from './src/services';

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
