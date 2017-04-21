import React, { Component } from 'react';
import TextEntry from './TextEntry';
import NewEntryHeader from './NewEntryHeader';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class NewEntry extends Component {
  render() {
    return (
      <View style={styles.textEntryContainer}>
        <NewEntryHeader />
        <TextEntry />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textEntryContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }, 
});