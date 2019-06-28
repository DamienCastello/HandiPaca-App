import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon , Text} from 'native-base';
export default class FooterMap extends Component {
  render() {
    return (
       
        <Container>
        <Footer>
          <FooterTab>
            <Button style= {{backgroundColor: '#a0cbf3'}}>
              <Text
              style={{fontSize: 40, color:'black', paddingTop: 30}}
              >Menu</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}