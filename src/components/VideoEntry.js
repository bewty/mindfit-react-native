'use strict';

import React, { Component } from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
 
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoEntry extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this._startRecord = this._startRecord.bind(this);
    this._recordVideo = this._recordVideo.bind(this);
    this._endVideo = this._endVideo.bind(this);
  }

   _startRecord() {
    startVideo = setTimeout(this._recordVideo.bind(this), 50)
  }

   _recordVideo() {
    this.refs.camera.capture({})
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
  _endVideo() {
    this.refs.camera.stopCapture()
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={true}
          captureMode={Camera.constants.CaptureMode.video}
          captureQuality={Camera.constants.CaptureQuality.medium}
          keepAwake={true}
          mirrorImage={true}
          type={Camera.constants.Type.front}
          >
          <TouchableHighlight>
            <Icon name='fiber-manual-record' size={48} color="#EB5424"  style={styles.record}/>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ... 
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  testingtest: {
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  record: {
    backgroundColor: 'black',
  }
});