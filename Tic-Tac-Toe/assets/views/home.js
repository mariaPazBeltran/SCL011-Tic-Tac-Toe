import React, {  useContext } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Board from '../components/board';
import { LinearGradient } from 'expo-linear-gradient';
import MyContext from '../state/MyContext';
import NextPlayer from '../components/nextPlayer';
import WinnerPlayer from '../components/Winner';

const windowWidth = Dimensions.get('window').width;
 const Home =()=> {
    const { state } = useContext(MyContext);
    return (
      <View style={styles.container_Home}>
        
    <NextPlayer/>
   
   <LinearGradient
            colors={["#f0f", '#fff']}
            style={styles.gameContainerGradient} >
            <Board/>
            {console.log(state)}
          </LinearGradient>
          {state.gameOver && <WinnerPlayer/>}
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