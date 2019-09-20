/* eslint-disable react/jsx-fragments */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {lazy, Suspense} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Text} from 'native-base';

const LandingPage = lazy(() => import('./src/views/LandingPage'));
const WeatherData = lazy(() => import('./src/views/WeatherData'));
let RootStack = createSwitchNavigator({
  Landing: LandingPage,
  weatherData: WeatherData,
});

let Navigation = createAppContainer(RootStack);
const App = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Suspense>
  );
};

export default App;
