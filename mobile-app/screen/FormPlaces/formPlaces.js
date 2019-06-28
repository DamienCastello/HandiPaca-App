import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Label, Form, Picker, Button, Footer, Title } from 'native-base';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FormPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        };
    }
    onValueChange(value: string ) {
        this.setState({
            selected: value
        });
    }
    render() {
    return (
            <Container>
                <Header style={{borderBottomWidth: 0, backgroundColor: '#fff'}}>
                    <Text  style={{fontSize: 25}}>Je voudrais ajouter un point !</Text>
                </Header>
                <Content>
                    <Form>
                        <View style={{ justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                            <Text style={{fontSize: 20, marginBottom: 15, marginTop:15}}>Il s'agit de: </Text>
                            <Picker
                                placeholder="Choisir"
                                style={{borderWidth: 1, borderColor: 'gray'}}
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-dropdown" size={25} style={{marginRight: 20}} />}
                                headerStyle={{ backgroundColor: "#9DC2F8"}}
                                headerBackButtonTextStyle={{ color: "#fff" }}
                                headerTitleStyle={{ color: "#fff" }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                {/* <Picker.Item label="Choisir:" value="key0" /> */}
                                <Picker.Item label="Places de parking" value="key1" />
                                <Picker.Item label="Restauration" value="key2" />
                                <Picker.Item label="Hébergement" value="key3" />
                            </Picker>
                        </View>
                        <Item floatingLabel >
                            <Label>Numéro de voie</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Rue</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Ville</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Code postal</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={{text: 'center', marginTop:100}}>
                        <Button rounded disabled block style={{width: '90%', alignSelf:'center'}}>
                            <Text style={{color: 'white'}}>Ajouter mon point</Text>
                        </Button>
                    </View>
                    
                </Content>
                <Footer style={{paddingTop: 10, backgroundColor: '#9DC2F8'}}>
                <Image
                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                    source={require('../../assets/planete.png')}
                />
                </Footer>
            </Container>
            
    );
    }
}

const style = StyleSheet.create({
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 1,
        width: '90%',
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 18
    },
    inputText: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 25
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    buttonText: {
        marginTop: 82,
        marginLeft: 120,
        position: 'absolute',
        fontSize: 30,
        zIndex: 900,
        color: '#FDC500'
    }
})