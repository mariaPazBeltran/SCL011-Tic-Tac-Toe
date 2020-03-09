import React, {  useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Board from '../components/board';
import { LinearGradient } from 'expo-linear-gradient';
import MyContext from '../state/MyContext';
import NextPlayer from '../components/nextPlayer';
import WinnerPlayer from '../components/Winner';

const windowWidth = Dimensions.get('window').width;
 const Home =()=> {
    const { state, dispatch } = useContext(MyContext);
    const handleClick =()=> {
      dispatch({
          type:'reset' })
    }
    return (
      <LinearGradient colors={['#fedc63','#672364', "#430064"]}
      style={styles.container_Home} >
      <View style={styles.gameContainerGradient}>
        
    <NextPlayer/>
           
            <Board/>
            {console.log(state)}
          
          {state.gameOver && <WinnerPlayer/>}
          <TouchableOpacity onPress={handleClick}>
            <Text style={styles.newGame}>Reiniciar</Text>
        </TouchableOpacity>
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
    newGame:{
      color: '#fedc63',
      marginTop:10,
      borderWidth: 1,
      borderColor: '#fedc63',
      borderRadius: 20,
      width: 100,
      textAlign: 'center',
    marginBottom: 2      
  }
  });
  
  export default Home