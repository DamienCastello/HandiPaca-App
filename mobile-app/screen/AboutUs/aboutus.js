import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class aboutus extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                <Text style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: 40, fontSize: 40 }}>A propos</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} >

                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={{ uri: 'https://www.sccpre.cat/mypng/full/26-268559_profile-picture-placeholder-round.png' }} />
                </View>
                <Text style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: 40, fontSize: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque libero et porta suscipit. Etiam gravida, erat in tempus varius, nulla augue pellentesque mi, vel mollis ipsum est sit amet est. Ut ac purus vitae dolor fringilla rutrum eget et quam. Cras lacinia convallis lacus, et luctus odio hendrerit a. Donec eget malesuada magna. Integer at ante elementum libero venenatis mattis vel sit amet dui. In eu malesuada ipsum, nec sodales risus. Suspendisse finibus sagittis felis, quis pulvinar velit laoreet vel. Curabitur placerat mi nulla, et ultrices risus molestie aliquet. 
                {"\n"} 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque libero et porta suscipit. Etiam gravida, erat in tempus varius, nulla augue pellentesque mi, vel mollis ipsum est sit amet est. Ut ac purus vitae dolor fringilla rutrum eget et quam. Cras lacinia convallis lacus, et luctus odio hendrerit a. Donec eget malesuada magna. Integer at ante elementum libero venenatis mattis vel sit amet dui. In eu malesuada ipsum, nec sodales risus. Suspendisse finibus sagittis felis, quis pulvinar velit laoreet vel. Curabitur placerat mi nulla, et ultrices risus molestie aliquet. 
                </Text>
            </View>
            </ScrollView>
        )
    }
}
