import React, { Component } from 'react';
import TextEntry from './TextEntry';
import VideoEntry from './VideoEntry';
import NewEntryHeader from './NewEntryHeader';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class NewEntry extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      entryType: 'Text'
    };

    this.renderEntryType = this.renderEntryType.bind(this);
    this.activeType = this.activeType.bind(this);
  }

  activeType(type) {
    this.setState({
      entryType: type
    });
  }

  renderEntryType(entryType) {
    const type = {
      Text: <TextEntry />,
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