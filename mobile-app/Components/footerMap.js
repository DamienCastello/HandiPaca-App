import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon , Text} from 'native-base';

import { TouchableOpacity, Image, View } from 'react-native'

export default class FooterMap extends Component {
  render() {
    return (
       
        <View style= {{flexDirection:'row', backgroundColor: '#a0cbf3'}}>
          <TouchableOpacity style= {{flexDirection:'row', alignContent:'space-between', marginRight: 10, backgroundColor: '#a0cbf3'}}>
            
            <Text style={{fontFamily:'Comfortaa', marginTop:20, marginLeft:15}} >
              Ajouter un point
            </Text>
            <Image source={require('../assets/logoplus.png')} style ={{resizeMode: 'contain', height: 60, width: 60, marginBottom: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity style= {{flexDirection:'row', backgroundColor: '#a0cbf3'}}>
            <Image source={require('../assets/exclamation.png')} style ={{resizeMode: 'contain',height: 40, width: 40, marginTop:10}} />
            <Text style={{fontFamily:'Comfortaa', marginTop:20, marginLeft:5}}>
              Prévenir d'un lieu
            </Text>
          </TouchableOpacity>
        </View>
      
    );
  }
}