import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import EntryList from '../components/EntryList';
import NewEntry from '../components/NewEntry';
import EntryDetail from '../components/EntryDetail';
import Profile from '../components/Profile';
import Results from '../components/Results';
import Calls from '../components/Calls';

export const EntryStack = StackNavigator({
  EntryList: {
    screen: EntryList,
    navigationOptions: {
      title: 'All Entries',
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.created_at.slice(0, 10)}`,
    }),
  },
});

export const NewEntryStack = StackNavigator({
   NewEntry: {
    screen:  NewEntry,
    navigationOptions: {
      title: ' New Entry',
    },
  },
});

export const Tabs = TabNavigator({
  EntryList: {
    screen: EntryStack,
    navigationOptions: {
      tabBarLabel: 'Entry',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book" size={24} color={tintColor} />
      ),
    },
  },
  Calls: {
    screen: Calls,
    navigationOptions: {
      tabBarLabel: 'Calls',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="call" size={24} color={tintColor} />
      ),
    },
  },  
  NewEntry: {
    screen: NewEntryStack,
    navigationOptions: {
      tabBarLabel: 'New Entry',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="add" size={24} color={tintColor} />
      ),
    },
  },  
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="insert-chart" size={24} color={tintColor} />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={24} color={tintColor} />
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#EB5424',
  },
});
