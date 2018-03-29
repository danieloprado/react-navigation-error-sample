import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const appDrawer = DrawerNavigator({
  Drawer1: { screen: Drawer1 },
  Drawer2: { screen: Drawer2 }
}, { initialRouteName: 'Drawer1' });

const Navigator = StackNavigator({
  Home: { screen: Home },
  Drawer1: { screen: appDrawer },
  Drawer2: { screen: appDrawer }
}, { initialRouteName: 'Home' });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
