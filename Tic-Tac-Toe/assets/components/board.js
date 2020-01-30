import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './row';
import MyContext from '../state/MyContext';


 const Board =()=> {
  const { dispatch, state } = useContext(MyContext);

    return (
      <View style={styles.container}>
        { [0, 1, 2].map(val =>
      <Row
        rowNum={val}
        boardRow={state.board[val]}
        gameOver={state.gameOver}
        key={val}
        onClick={ (rowNum, colNum)=>  dispatch({
          type:'movement', payload:{rowNum, colNum} })} />) }
      </View>
    );
  
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
export default Board;