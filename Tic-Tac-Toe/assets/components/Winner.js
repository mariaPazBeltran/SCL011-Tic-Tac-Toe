import React, {useContext} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import MyContext from '../state/MyContext';
const WinnerPlayer = () =>{
    const { state, dispatch } = useContext(MyContext);
   const handleClick =()=> {
        dispatch({
            type:'reset' })
      }
return(
    <View style={styles.modal}>
        {!state.winner &&
        <Text style={styles.nextPlayerView}>Es Un Empate :c</Text>
        }
        {state.winner &&
         <Text style={styles.nextPlayerView}>El ganador es: {state.winner}!!!</Text>
        }
        <TouchableOpacity onPress={handleClick}>
            <Text style={styles.newGame}>Jugar de nuevo</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    nextPlayerView: {
        fontSize: 20,
        color: '#f0f',
    },
    modal:{
        
        position: "absolute",
        backgroundColor: 'black',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    newGame:{
        color: '#f0f',
        marginTop:10,
        borderWidth: 1,
        borderColor: '#f0f',
        borderRadius: 20
    }
  });
  
export default WinnerPlayer;