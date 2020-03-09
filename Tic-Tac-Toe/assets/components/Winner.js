import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
         <Text style={styles.nextPlayerView}>El ganador es:

          <Image style={styles.nextPlayerImg} source={state.winner} />
          !!!</Text>
         
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
        color: '#fedc63',
    },
    modal:{
        
        position: "absolute",
        backgroundColor: '#672364',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fedc63',
        borderRadius: 20
    },
    newGame:{
        color: '#fedc63',
        marginTop:10,
        borderWidth: 1,
        borderColor: '#fedc63',
        borderRadius: 20,
        width: 120,
        textAlign: 'center'
    },
    nextPlayerImg:{
        width: 30,
        height: 30
        }
  });

export default WinnerPlayer;