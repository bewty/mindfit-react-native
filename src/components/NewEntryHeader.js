import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

 const NewEntryHeader = ({headerText}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.topTabButton}><Text style={styles.headerText}>Video</Text></TouchableOpacity>
      <TouchableOpacity style={styles.topTabButton}><Text style={styles.headerText}>Audio</Text></TouchableOpacity>
      <TouchableOpacity style={styles.topTabButtonActiveTab}><Text style={styles.headerText}>Text</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    height: 60,
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
    borderWidth: 4,
  },
  headerText: {
    fontSize: 20,
    color: '#262626',
  }
})

export default NewEntryHeader;