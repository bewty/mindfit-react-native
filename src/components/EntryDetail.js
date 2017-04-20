'use strict';

import React, { Component } from 'react';
import Card from './Card';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class EntryView extends Component {

  render() {
    const {created_at, entry_type, text, video, watson_results} = this.props.navigation.state.params;
    console.log('===this', this);
    console.log('===entry_type', entry_type);
    return (
      <View style={styles.entryDetailContainer}>
        <Card height={200}>
          <Text style={styles.text}>{text}</Text>
        </Card> 
      </View>

    );
  }
}

const styles = StyleSheet.create({
  entryDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#262626',
    marginTop: 10,
  }
});


export default EntryView;