import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class TextEntry extends Component {
  render() {
    return (
      <View style={styles.textEntryContainer}>
        <View style={styles.textBox}>
          <TextInput
            placeholder="hello world"
            multiline={true}
            style={styles.textInput}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textEntryContainer: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  textInput: {
    height: 400,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 16,
  }
});