import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProviderContext from './assets/state/ProviderContext'
import Home from './assets/views/home';
import MyContext from './assets/state/MyContext';



export default function App() {
  
  const { ...state } = useContext(MyContext);;
  return (
   <ProviderContext>
     <View style={styles.container}>
  <Text>{state.nextPlayer}</Text>
     <Home/>
   </View>
   {console.log(state.nextPlayer)}
   </ProviderContext>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
