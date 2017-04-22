import React, { Component } from 'react';
import App from './src/containers/App';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';

export default class MindFit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('MindFit', () => MindFit);

