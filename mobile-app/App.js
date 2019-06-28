import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {

      loading: false

    }

  }


  async componentDidMount() {

    await Font.loadAsync({

      'Comfortaa': require('./assets/fonts/Comfortaa.ttf'),
      ...Ionicons.font,

    });
    this.setState({ loading: true });
  };

  render() {
    if (!this.state.loading) {
      return null;//todo create component loading ==>       return <AppLoading />
    }   
    return (
        <View style={styles.container}>
          <StackNavigator />
        </View>
      )
    // return (
    //   <View style={styles.container}>
    //     <StackNavigator />
    //   </View>
    // )

  }



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});