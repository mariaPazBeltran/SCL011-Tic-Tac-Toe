import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import MyContext from '../state/MyContext';
const NextPlayer = () =>{
    const { state } = useContext(MyContext);
return(
    <View>
<Text style={styles.nextPlayerView}>Es el turno de:
 <Image style={styles.nextPlayerImg} source={state.nextPlayer}/>
 </Text>
    </View>
)
}
const styles = StyleSheet.create({
    nextPlayerView: {
     fontSize: 20,
     color: '#430064',
     textAlign: 'center',
    },
    nextPlayerImg:{
    width: 20,
    height: 20
    }
  });
export default NextPlayer;