import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import List from '../screens/List';
import Classes from '../screens/Classes';
import Map from '../screens/Map';



const RootStack = createNativeStackNavigator({
  initialRouteName: 'Main',
  screens: {
    Map: Map,
    Main: Main,
    List: List,
    Classes: Classes
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigation() {
  return <Navigation />;
}