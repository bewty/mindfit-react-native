'use strict';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from './Card';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EntryTextDisplay = ({entry}) => {
    const renderIcon = (entryType) => {
      const icon = {
        video: (<Icon name='videocam' size={24} color="#EB5424" />),
        audio: (<Icon name='keyboard-voice' size={24} color="#EB5424" />),
        text: (<Icon name='text-fields' size={24} color="#EB5424" />),
      }
      return icon[entryType];
    }

    return (
      <Card height={130}>
        <View style={styles.entryContainer}>
          <View style={styles.entryMeta}>
            <Text style={styles.date}>{entry.created_at.slice(0, 10)}</Text>
            {renderIcon(entry.entry_type)}
          </View>
          <Text 
          style={styles.text} 
          numberOfLines={3}
          ellipsizeMode={'tail'}
          >{entry.text}</Text>
        </View>
      </Card>
    )
}

const styles = StyleSheet.create({
  entryContainer: {
    flex: 1,
  },
  entryMeta: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#82888a'
  },
  text: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#303030',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 6,
  }
});


export default EntryTextDisplay;