'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import axios from 'axios';
import TextEntry from './TextEntry';
import VideoEntry from './VideoEntry';
import NewEntryHeader from './NewEntryHeader';

export default class NewEntry extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      entryType: 'Text',
      textVal: ''
    };

    this.renderEntryType = this.renderEntryType.bind(this);
    this.activeType = this.activeType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._textInputChange = this._textInputChange.bind(this);
  }

  activeType(type) {
    this.setState({
      entryType: type
    });
  }

  _textInputChange(text) {
    this.setState({textVal: text});
  }

  _handleSubmit(event) {
    event.preventDefault();
    const data = {
      text: this.state.textVal.text,
      entryType: 'text',
      // user_id: localStorage.user_id
      user_id: '58fa54a39011a00012a54936' //hardcoded
    };
    axios.post('https://bewty.herokuapp.com/entry', data)
    .then(res => console.log('text upload to server done'))
    .catch(err => console.log('text upload error...', err.message));

    this.setState({textVal: ''});
  }

  renderEntryType(entryType) {
    const type = {
      Text: <TextEntry text={this.state.textVal} handleSubmit={this._handleSubmit} textInputChange={this._textInputChange}/>,
      Video: <VideoEntry />,
    }

    return type[entryType];
  }

  render() {
    return (
      <View style={styles.textEntryContainer}>
        <NewEntryHeader activeType={this.activeType} currEntryType={this.state.entryType}/>
        {this.renderEntryType(this.state.entryType)}
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