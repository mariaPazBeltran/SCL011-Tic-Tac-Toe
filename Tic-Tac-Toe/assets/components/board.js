import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './row';


export default class Board extends Component {
  renderRows() {
    return [0, 1, 2].map(val =>
      <Row
        onClick={this.props.onClick}
        rowNum={val}
        
        gameOver={this.props.gameOver}
        key={val}
      />
    );
  }

  render() {
    const rows = this.renderRows();

    return (
      <View style={styles.container}>
        { rows }
      </View>
    );
  }
}

Board.propTypes = {
  board: PropTypes.array,
  gameOver: PropTypes.bool,
  onClick: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
