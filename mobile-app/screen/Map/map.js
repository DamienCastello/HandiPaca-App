import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps';



const datas = require('../../Files/Data.json');








export default class MapHandi extends Component {
    componentDidMount() {
        console.log(datas)
    }
    
    render() {
        
        return (
            <View style={{flex:1}}>
                <MapView style={{flex: 1}}
                initialRegion={{
                    latitude: 43.700000,
                    longitude: 7.250000,
                    latitudeDelta: 0.0002,
                    longitudeDelta: 0.4001
                  }}
                >
                {
                   datas.docs.map((doc, index) =>{
                    return  <MapView.Marker
                                key={index}
                                coordinate={{
                                  latitude: parseFloat(doc.geometry.coordinates[1]),
                                  longitude: parseFloat(doc.geometry.coordinates[0])
                                }}
                                title={doc.NOM_VOIE}
                                description={`"Nombre de places :"${doc.NB_PLACE}`}
                                image={require("../../assets/Ping2.png")}
                                style={{height:20 , width: 20}}
                                >
                              
                              
                            </MapView.Marker>;
                  })
                }
                 </MapView>
            </View>
        )
    }
}
