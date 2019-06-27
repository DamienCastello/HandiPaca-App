import React from 'react';
// @ts-ignore
import headerImage from '../assets/Header.png';
import { ImageBackground, Text, View } from 'react-native';
import FooterMap from '../Components/footerMap'

export default {
  defaultNavigationOptions: {
    headerTitle: (title) => {
      return (
        
          <ImageBackground source={headerImage} style={{ flex: 1, height: 150 }} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text >{title.children}</Text>
          </View>
        </ImageBackground>
        
        
      )
    },
    headerStyle: { borderBottomColor: 'transparent', borderColor: 'transparent', elevation: 0 },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center'
    }
  },
}