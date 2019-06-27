import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class accueil extends Component {
    render() {
        return (
            <View >
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 40 }}> HandiPaca </Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ resizeMode: 'contain', height: 300, width: 300,marginTop:55 }} source={require('../../assets/Ping.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:80 }} >
                    <Image style={{ resizeMode: 'contain', height: 80, width: 80 }} source={require('../../assets/logopaca.png')} />
                    <Image style={{ resizeMode: 'contain', height: 80, width: 80 }} source={require('../../assets/dataweek.png')} />
                    <Image style={{ resizeMode: 'contain', height: 70, width: 70 }} source={require('../../assets/wild.png')} />
                </View>
            </View>
        )
    }
}
