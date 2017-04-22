import React, { Component } from 'react';
import {Tabs} from './src/config/router.js';
import Main from './src/components/Main.js';

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
        <Tabs />
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

