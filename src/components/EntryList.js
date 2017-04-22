'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMediaUrl, fetchEntry } from '../actions/index';
import EntryTextDisplay from './EntryTextDisplay';
import axios from 'axios';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      entries: [{'watson_results': '', 'text': '', 'entry_type': '', '_id': '', 'tags': [ ], 'audio': {'key': null, 'bucket': null}, 'video': {'avg_data': null, 'key': null, 'bucket': null, 'raw_data': null}, 'created_at': ''}]
    };

    this.renderEntryList = this.renderEntryList.bind(this);
    this.entrySelect = this.entrySelect.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._onfetchMediaUrl = this._onfetchMediaUrl.bind(this);
  }

  componentWillMount() {
    const data = {
      user_id: '58fa54a39011a00012a54936'
    };

   this.fetchData();

    // fetch('https://bewty.herokuapp.com/db/retrieveEntry', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then( response => {
    //   return response.json();
    // })
    // .then( result => {
    //   // console.log('result', result);
    //   this.setState({
    //     entries: result
    //   });
    // })
    // .catch( err => console.error('Fetching Entry Error', err.message));

  }

  fetchData() {
    const data = {
      user_id: '58fa54a39011a00012a54936'
    };
    
    axios.post('https://bewty.herokuapp.com/db/retrieveEntry', data)
    .then( response => {
      // this.props.fetchEntry(result.data);
      console.log('fetchEntry data:', response.data);
      this.props.fetchEntry(response.data);
      // this.setState({
      //   entries: response.data 
      // });
    })
    .then(() => {
      this.setState({refreshing: false});
    })
    .catch( err => console.error('Fetching Entry Error', err.message));
  }

  _onfetchMediaUrl(entryId, entryType) {
    const data = {
      user_id: '58fa54a39011a00012a54936'
    };

    if (entryType !== 'text') {
      axios.get(`https://bewty.herokuapp.com/entry/${entryId}/${entryType}/${data.user_id}`)
      .then( result => {
        this.props.fetchMediaUrl(result.data);
      })
      .catch( err => console.error('Fetching Media Error'));
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData();
  }

  renderEntryList() {
    return this.props.entries.map( (entry, index) => 
      <TouchableOpacity
        key={index} 
        onPress={() => {
          this.entrySelect(entry);
          this._onfetchMediaUrl(entry._id, entry.entry_type);
        }}
      >
        <EntryTextDisplay entry={entry} />
      </TouchableOpacity>
    );
  }

  entrySelect(entry) {
    this.props.navigation.navigate('EntryDetail', entry);
  }

  render() {
    return (
      <ScrollView 
        style={styles.entryListContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        >
        <View>
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

function mapStateToProps(state) {
  return {
    entries: state.entries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEntry: fetchEntry,
    fetchMediaUrl: fetchMediaUrl,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
