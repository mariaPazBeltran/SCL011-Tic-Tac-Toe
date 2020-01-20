import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameMode from '../components/GameMode';
import shield from '../images/shield.png'
import sword from '../images/swords.png'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      token: "",
      chooseToken: [shield, sword]
    }
  //  this.tokenChoice = this.tokenChoice.bind(this);
  }
tokenChoice(e){
    console.log(shield)
    alert(shield)

}
  render(){
    return (
      <View style={styles.container_Home}>
        
    <Text>Jugemos!!!</Text>
    <GameMode
    img={this.state.chooseToken}
    tokenChoice={(e)=>this.tokenChoice(e)}/>
      </View>
    );
  }
  }
  const styles = StyleSheet.create({
    container_Home: {
     
      backgroundColor: '#f0f',
      color: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
  });