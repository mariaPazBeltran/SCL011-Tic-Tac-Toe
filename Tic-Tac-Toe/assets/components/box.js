import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default class Box extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.onClick(this.props.rowNum, this.props.colNum);
      }
    render(){
     
      return (
        <View>
          
      <TouchableOpacity
      onPress={this.handleClick}
      style={[styles.option]}
      disabled={this.props.buttonValue !== null || this.props.gameOver}>
          <Image style={[styles.optionText]}
         source={this.props.buttonValue ? this.props.buttonValue : ''}/>
      </TouchableOpacity>
     
        </View>
      );
    }
    }
    Box.propTypes = {
        
        gameOver: PropTypes.bool,
        rowNum: PropTypes.number,
        colNum: PropTypes.number,
        onClick: PropTypes.func
      };
      
      const styles = StyleSheet.create({
        option: {
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#fedc63',
          width: 100
        },
      
        optionText: {
          width:50,
          height: 50
        }
      });