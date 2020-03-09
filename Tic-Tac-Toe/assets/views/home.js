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
      <LinearGradient colors={['#fedc63','#672364', "#430064"]}
      style={styles.container_Home} >
      <View style={styles.gameContainerGradient}>
        
    <NextPlayer/>
           
            <Board/>
            {console.log(state)}
          
          {state.gameOver && <WinnerPlayer/>}
      </View>
       </LinearGradient>
    );
  }
  const styles = StyleSheet.create({
    container_Home: {
     
     
      height: windowWidth,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#fedc63",
      marginTop: 0,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    gameContainerGradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default Home