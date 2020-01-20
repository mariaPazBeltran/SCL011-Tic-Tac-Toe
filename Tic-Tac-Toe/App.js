import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/views/home';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>holis!</Text>
  <Text>bonjou, m rele mary. mwen kontan pou konnen w</Text>
  <Home/>
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
