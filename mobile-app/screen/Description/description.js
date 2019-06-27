import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class aboutus extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: 40, fontSize: 40 }}>Description</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ resizeMode: 'contain', height: 100, width: 100, marginTop: 55 }} source={require('../../assets/Ping.png')} />
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
