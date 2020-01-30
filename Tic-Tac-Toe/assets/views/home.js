import React, { Component, useContext } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Board from '../components/board';
import { LinearGradient } from 'expo-linear-gradient';
import MyContext from '../state/MyContext';

const windowWidth = Dimensions.get('window').width;
 const Home =()=> {
    const { dispatch, state } = useContext(MyContext);
   const player2 = 'O'
    return (
      <View style={styles.container_Home}>
        
    <Text>Jugemos!!!</Text>
   
   <LinearGradient
            colors={["#f0f", '#fff']}
            style={styles.gameContainerGradient} >
            <Board/>
          </LinearGradient>
      </View>
       
    );
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
  export default Home