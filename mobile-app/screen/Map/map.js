import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image } from 'react-native'
import MapView from 'react-native-maps';
import FooterMap from '../../Components/footerMap'

const datas = require('../../Files/Data.json');

export default class MapHandi extends Component {
    componentDidMount() {
        console.log(datas)
    }
    static navigationOptions = {
        title: "",
        headerLeft: null
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 9 }}
                    initialRegion={{
                        latitude: 43.697555,
                        longitude: 7.255962,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    {
                        datas.docs.map((doc, index) => {
                            return <MapView.Marker
                                key={index}
                                coordinate={{
                                    latitude: parseFloat(doc.geometry.coordinates[1]),
                                    longitude: parseFloat(doc.geometry.coordinates[0])
                                }}
                                title={doc.NOM_VOIE}
                                description={`"Nombre de places :"${doc.NB_PLACE}`}
                                image={require("../../assets/Ping2.png")}
                                style={{ height: 20, width: 20 }}
                            >


                            </MapView.Marker>;
                        })
                    }
                </MapView>
                <View style= {{flex:1,flexDirection:'row', backgroundColor: '#a0cbf3'}}>
          <TouchableOpacity onPress={() => {
                                           
                                           this.props.navigation.navigate('FormPlaces')
                                       }}
          style= {{flexDirection:'row', alignContent:'space-between', marginRight: 10, backgroundColor: '#a0cbf3'}}>
            
            <Text style={{fontFamily:'Comfortaa', marginTop:20, marginLeft:15}} >
              Ajouter un point
            </Text>
            <Image source={require('../../assets/logoplus.png')} style ={{resizeMode: 'contain', height: 60, width: 60, marginBottom: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                                           
                                           this.props.navigation.navigate('FormAmenagement')
                                       }}
          style= {{flexDirection:'row', backgroundColor: '#a0cbf3'}}>
            <Image source={require('../../assets/exclamation.png')} style ={{resizeMode: 'contain',height: 40, width: 40, marginTop:10}} />
            <Text style={{fontFamily:'Comfortaa', marginTop:20, marginLeft:5}}>
              Prévenir d'un lieu
            </Text>
          </TouchableOpacity>
        </View>
            </View>
        )
    }
}
