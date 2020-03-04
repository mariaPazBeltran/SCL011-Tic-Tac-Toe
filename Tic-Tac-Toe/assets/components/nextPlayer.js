import React, {useContext} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MyContext from '../state/MyContext';
const NextPlayer = () =>{
    const { state } = useContext(MyContext);
return(
    <View>
<Text style={styles.nextPlayerView}>Es el turno de {state.nextPlayer}</Text>
    </View>
)
}
const styles = StyleSheet.create({
    nextPlayerView: {
     fontSize: 20,
    }
  });
export default NextPlayer;