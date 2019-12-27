import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import commonStyles from './src/commonStyles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to react native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

