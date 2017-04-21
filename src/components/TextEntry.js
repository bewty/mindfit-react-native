import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            UPLOAD
          </Text>
        </TouchableOpacity>
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
    fontSize: 16,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#EB5424',
    height: 60,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#EB5424',
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  }
});