import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export const StackNav = createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator,
      navigationOptions: {
        headerMode: "none",
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(StackNav);
