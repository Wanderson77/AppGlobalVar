import React, { Component } from 'react';

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/screens1';
import SecondPage from './pages/screens2';

const App = createStackNavigator({
  First: { screen: FirstPage },
  Second: { screen: SecondPage },
});

export default createAppContainer(App);