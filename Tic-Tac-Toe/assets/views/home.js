import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from '../components/box';


export default class Home extends Component {
  constructor(){
    super()
    this.state={
    
    }
  
  }

  render(){
    return (
      <View style={styles.container_Home}>
        
    <Text>Jugemos!!!</Text>
   <Box/>
      </View>
    );
  }
  }
  const styles = StyleSheet.create({
    container_Home: {
     
      backgroundColor: '#f0f',
      color: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
  });