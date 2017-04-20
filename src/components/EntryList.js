'use strict';

import React, { Component } from 'react';
import EntryTextDisplay from './EntryTextDisplay';
import axios from 'axios';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [{'watson_results': '', 'text': '', 'entry_type': '', '_id': '', 'tags': [ ], 'audio': {'key': null, 'bucket': null}, 'video': {'avg_data': null, 'key': null, 'bucket': null, 'raw_data': null}, 'created_at': ''}]
    };

    this.renderEntryList = this.renderEntryList.bind(this);
  }

  componentWillMount() {
    const data = {
      user_id: '58f55a76393538d31aad168e'
    };

    axios.post('http://127.0.0.1:3000/db/retrieveEntry', data)
    .then( response => {
      // this.props.fetchEntry(result.data);
      console.log('fetchEntry data:', response.data);
      this.setState({
        entries: response.data 
      });
    })
    .catch( err => console.error('Fetching Entry Error', err.message));
  }

  renderEntryList() {
    return this.state.entries.map( (entry, index) => 
      <TouchableOpacity
        key={index} 
        <EntryTextDisplay entry={entry} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.entryListContainer}>
          {this.renderEntryList()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  entryListContainer: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  text: {
    color: '#262626',
  }
});