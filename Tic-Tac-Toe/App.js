import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProviderContext from './assets/state/ProviderContext'
import Home from './assets/views/home';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
 
  return (
   <ProviderContext>
     
        <View style={styles.container}>
          <Text style={styles.title}>Tic-Tac-Toe</Text>
          <Home/>
        </View>
          
 
   </ProviderContext>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title:{
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center',
    color: '#fedc63',
    marginBottom: 20
  }
});
