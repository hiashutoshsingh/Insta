import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import MainScreen from './Components/MainScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
