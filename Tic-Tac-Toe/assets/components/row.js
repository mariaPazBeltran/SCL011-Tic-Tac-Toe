import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Box from './box';
export default class Row extends Component {
    renderRow() {
        return [0, 1, 2].map(val =>
          <Box
            rowNum={this.props.rowNum}
            colNum={val}
            gameOver={this.props.gameOver}
           
            onClick={this.props.onClick}
            key={val}
          />
        );
      }
    
      render() {
        const row = this.renderRow();
    
        return (
          <View style={styles.container}>
            { row }
          </View>
        );
      }
    }
    
    Row.propTypes = {
      rowNum: PropTypes.number,
      gameOver: PropTypes.bool,
      boardRow: PropTypes.array,
      onClick: PropTypes.func
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row'
      }
    });