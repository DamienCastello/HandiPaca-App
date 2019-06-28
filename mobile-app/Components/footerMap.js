import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon ,Image, Text} from 'native-base';
export default class FooterMap extends Component {
  render() {
    return (
       
        <Container style={{flex:1}}>
        <Footer>
          <FooterTab>
          <Button style= {{backgroundColor: '#a0cbf3',borderWidth:1, borderColor: 'black'}}>
              <Text
              style={{fontSize: 20, color:'black', paddingTop: 10}}
              >Signaler un lieu</Text>
            </Button>
            <Button style= {{backgroundColor: '#a0cbf3',borderWidth:1, borderColor: 'black'}}>
              
              <Text
              style={{fontSize: 20, color:'black', paddingTop: 10 }}
              >Ajouter un lieu</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}