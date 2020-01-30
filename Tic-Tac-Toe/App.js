import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProviderContext from './assets/state/ProviderContext'
import Home from './assets/views/home';




export default function App() {
 
  return (
   <ProviderContext>
 <View style={styles.container}>
   <Text>mwen kontan pou konnen w</Text>
 <Home/>
 </View>
   </ProviderContext>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
