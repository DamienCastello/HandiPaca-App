import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
