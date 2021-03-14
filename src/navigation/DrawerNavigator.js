import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../components/screens/HomeScreen';
import Screen1 from '../components/screens/Screen1';

import MenuDrawer from '../components/menu/MenuDrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.63,
    drawerBackgroundColor: "transparent ",
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }

}
const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Screen1: {
            screen: Screen1
        }


    },
    DrawerConfig

);

export default createAppContainer(DrawerNavigator);

