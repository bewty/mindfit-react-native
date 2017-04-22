'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const Card = ({children, height}) => {
  
  const renderCardHeight = (height) => {
    return {
    height: height,
    marginBottom: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    }
  }

  return(
    <View style={renderCardHeight(height)}>
      {children}
    </View>
  );
}

export default Card;