import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Label, Form, Picker, Button, Footer, Title } from 'native-base';
import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FormAmenagement extends Component {
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
    static navigationOptions = {
        title: "",
        headerLeft: null
    }
    render() {
    return (
            <Container>
                <Header style={{borderBottomWidth: 0, backgroundColor: '#fff'}}>
                    <Text  style={{fontSize: 25}}>Je voudrais signaler un problème !</Text>
                </Header>
                <Content>
                    <Form>
                        
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
                        <Item floatingLabel >
                            <Label>Email</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View>
                        <Text style ={{alignSelf:'center', fontFamily:'Comfortaa', marginTop:30,}}> De quoi manquez vous ?</Text>
                        <TextInput
        editable = {true}
        maxLength = {500}
        placeholder= 'Ecrivez ici !'
        textAlign={'top'}
        multiline = {true}
         numberOfLines = {4}
         placeholderTextColor = {'black'}
        
        style={{ borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            height: 150,
        marginHorizontal: 30,
        marginBottom: 20,
        opacity: 1,
        color: 'black',
        
    }}
      /> 
                    </View>
                    <TouchableOpacity onPress={() => {
                                           
                                           this.props.navigation.navigate('MapHandi')
                                       }}
                    style={{...style.buttonAdd,backgroundColor:'#9DC2F8', width: '75%', alignSelf:'center', paddingTop: 20, borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',}}>
                        <Text style={{alignSelf:'center', marginBottom:20, fontFamily:'Comfortaa',borderRadius:50}} >
                            Ajouter mon point !
                        </Text>
                        
                    </TouchableOpacity>
                    
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
    },
    buttonAdd:{
        borderRadius: 10
    }
})

