import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

 const NewEntryHeader = ({headerText, activeType, currEntryType}) => {
  const icon = {
    Video: (<Icon name='videocam' size={24} color="#EB5424" />),
    Audio: (<Icon name='keyboard-voice' size={24} color="#EB5424" />),
    Text: (<Icon name='text-fields' size={24} color="#EB5424" />),    
    VideoActive: (<Icon name='videocam' size={24} color="#929292" />),
    AudioActive: (<Icon name='keyboard-voice' size={24} color="#929292" />),
    TextActive: (<Icon name='text-fields' size={24} color="#929292" />),
  }
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={currEntryType === 'Text' ? styles.topTabButtonActiveTab : styles.topTabButton} onPress={() => activeType('Text')}>{currEntryType === 'Text' ? icon['Text'] : icon['TextActive']}</TouchableOpacity>
      <TouchableOpacity style={currEntryType === 'Video' ? styles.topTabButtonActiveTab : styles.topTabButton} onPress={() => activeType('Video')}>{currEntryType === 'Video' ? icon['Video'] : icon['VideoActive']}</TouchableOpacity>
      <TouchableOpacity style={currEntryType === 'Audio' ? styles.topTabButtonActiveTab : styles.topTabButton} onPress={() => activeType('Audio')}>{currEntryType === 'Audio' ? icon['Audio'] : icon['AudioActive']}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    height: 80,
    paddingTop: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  topTabButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  topTabButtonActiveTab: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    borderColor: '#fff',
    borderBottomColor: 'red',
    borderWidth: 2,
  },
})

export default NewEntryHeader;