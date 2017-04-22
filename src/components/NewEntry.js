import React, { Component } from 'react';
import TextEntry from './TextEntry';
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