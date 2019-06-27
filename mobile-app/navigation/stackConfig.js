import React from 'react';
// @ts-ignore

import { ImageBackground, Text, View } from 'react-native';

export default {
  defaultNavigationOptions: {
    headerTitle: (title) => {
      return (
        <View>
            <Text style={{flex:1}}>Salam</Text>
        </View>
      )
    },
    
    
  },
}