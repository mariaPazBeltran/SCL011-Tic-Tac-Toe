import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Board from '../components/board';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
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
   
   <LinearGradient
            colors={["#000", '#f0f']}
            style={styles.gameContainerGradient} >
            <Board/>
          </LinearGradient>
      </View>
       
    );
  }
  }
  const styles = StyleSheet.create({
    container_Home: {
     
      backgroundColor: '#f0f',
      height: windowWidth,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "black",
      marginTop: 0,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameContainerGradient: {
      flex: 1
    },
  });