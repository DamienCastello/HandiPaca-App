import React, { Component } from 'react'
import { StyleSheet,TouchableOpacity, Image, Text, View } from 'react-native'

export default class accueil extends Component {
    render() {
        return (
            <View style={{flex:1}} >
                <View style={{ flex : 2}}>
                 <Text style={{   fontFamily: 'Comfortaa',textAlign: 'center', marginTop: 40, fontSize: 40 }}> HandiPaca </Text>

                </View>
                <TouchableOpacity style={{ flex : 6}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ resizeMode: 'contain', height: 300, width: 300, marginTop: 55 }} source={require('../../assets/Ping.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf:'flex-end', marginRight: 15 }} source={require('../../assets/infologo.png')} />
                    </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 80, flex: 2 }} >
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', height: 80, width: 80 }} source={require('../../assets/logopaca.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', height: 80, width: 80 }} source={require('../../assets/dataweek.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', height: 70, width: 70 }} source={require('../../assets/wild.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
