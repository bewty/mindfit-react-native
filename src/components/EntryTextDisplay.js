'use strict';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EntryTextDisplay = ({entry}) => {
    const renderIcon = (entryType) => {
      const icon = {
        video: (<Icon name="videocam" size={24} color="#EB5424" />),
        audio: (<Icon name="keyboard-voice" size={24} color="#EB5424" />),
        text: (<Icon name="text-fields" size={24} color="#EB5424" />)
      }
      return icon[entryType];
    }

    return (
      <View style={styles.card}>
        <View style={styles.entryContainer}>
          <View style={styles.entryMeta}>
            <Text style={styles.date}>{entry.created_at.slice(0, 10)}</Text>
            {renderIcon(entry.entry_type)}
          </View>
          <Text 
          style={styles.text} 
          numberOfLines={2}
          ellipsizeMode={'tail'}
          >{entry.text}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'red',
    height: 120,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
  entryContainer: {
    flex: 1,
    marginRight: 14,
    marginLeft: 14,
  },
  entryMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12
  },
  date: {
    fontSize: 14,
    // fontWeight: 'bold',
    marginRight: 10,
    color: '#82888a'
  },
  text: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#292929',
    fontSize: 18,
    marginTop: 10,
  }
});


export default EntryTextDisplay;