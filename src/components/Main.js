import React, { Component } from 'react';
import TextEntry from './TextEntry.js';
import Header from './Header.js';
import EntryList from './EntryList.js';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Main'}/>
        <EntryList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    fontSize: 14,
    color: 'black',
  }
});

