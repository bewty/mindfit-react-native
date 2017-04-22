'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  WebView,
} from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

class EntryDetail extends Component {


  render() {
    const {created_at, entry_type, text, video, watson_results} = this.props.navigation.state.params;
    console.log('===this', this);
    console.log('===this.props.mediaUrl', this.props.mediaUrl);
    return (
      <ScrollView style={styles.entryDetailContainer}>
        <Card style={styles.cardText}>
          <Text style={styles.text}>{text}</Text>
        </Card> 
        <WebView
        source={{html: '<html><video width="320" height="240" style="display: flex; text-align: center" src=`${this.props.mediaUrl}`></html>'}}
        style={{alignSelf: 'stretch', height: 260}}
        />
        <VideoPlayer 
          source={{uri: `https://s3-us-west-1.amazonaws.com/smartdiarybewt/curry.mp4`}}
          navigator={ this.props.navigator }
          playInBackground={ false }   // play audio when entering background 
          playWhenInactive={ false }   // [iOS] continuing playing when notification centre active 
          resizeMode={ 'contain' }     // 'contain' or 'cover' should be used.
          paused={ false }             // stop playback entirely 
          repeat={ false }             // Repeats at end of duration 
          muted={ false }              // Mutes the audio entirely. 
          title={ '' }                 // Video title, if null title area is hidden 
          volume={ 1 }                 // 0 is muted, 1 is normal. 
          rate={ 1 }                   // 0 is paused, 1 is normal.
          controlTimeout={ 15000 }     // hide controls after ms of inactivity. 
          seekColor={ '#EB5424' }         // fill/handle colour of the seekbar 
          videoStyle={ {height: 260} }            // Style appended to <Video> component 
          style={ {height: 260} }                 // Style appended to <View> container 
        />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  entryDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardText: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#303030',
    marginTop: 10,
  },
   backgroundVideo: {
    flex: 1,
    height: 360,
    alignSelf: 'stretch'
  },
});

function mapStateToProps(state) {
  return {
    entrySelected: state.entrySelected,
    mediaUrl: state.mediaUrl
  };
}

export default connect(mapStateToProps, null)(EntryDetail);
