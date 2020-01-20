import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import shield from '../images/shield.png'
import sword from '../images/swords.png'

export default GameMode=({img, tokenChoice})=>{
    return(
        <View>
             <Modal
  animationType="slide"
  transparent={true}
  visible={true}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
  }}>
  <View style={{marginTop: 22}}>
    <View>
      <Text>Escoge un Token!</Text>
      <TouchableOpacity onPress={(e)=>tokenChoice(e.currentTarget)}>
      <Image
  style={{width: 50, height: 50}}
  source={img[0]}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
  style={{width: 50, height: 50}}
  source={img[1]}/>
      </TouchableOpacity>
      <Text>Escoge con cuantas Grillas quieres Jugar</Text>
      <TouchableOpacity>
          <Text>3x3</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text>4x4</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

        </View>
    )
}