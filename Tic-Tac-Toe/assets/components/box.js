import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default class Box extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(evt) {
        this.props.onClick(this.props.rowNum, this.props.colNum);
      }
    render(){
     
      return (
        <View style={styles.container_Home}>
          
      <TouchableOpacity
      onPress={this.handleClick}
      style={[styles.option]}
      disabled={this.props.buttonValue !== null || this.props.gameOver}>
          <Text style={[styles.optionText]}>
          {this.props.buttonValue ? this.props.buttonValue : '?'}
        </Text>
      </TouchableOpacity>
     
        </View>
      );
    }
    }
    Box.propTypes = {
        buttonValue: PropTypes.string,
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
          borderColor: 'black'
        },
      
        optionText: {
          fontSize: 52,
          fontWeight: '900'
        }
      });