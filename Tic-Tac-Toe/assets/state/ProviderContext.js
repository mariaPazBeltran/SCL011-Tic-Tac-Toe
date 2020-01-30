import MyContext from './MyContext'
import InitialState from './InitialState'
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case 'movement':
        const updateBoard = (currentBoard) => {
          const newBoard = [
                  [currentBoard[0][0], currentBoard[0][1], currentBoard[0][2]],
                  [currentBoard[1][0], currentBoard[1][1], currentBoard[1][2]],
                  [currentBoard[2][0], currentBoard[2][1], currentBoard[2][2]]
          ];
          newBoard[action.payload.rowNum][action.payload.colNum] = state.nextPlayer;
      
          return newBoard;
        };
        const player = state.nextPlayer === 'X' ? 'O' : 'X';
        const board = updateBoard(state.board)
        
       return {
         ...state,
         nextPlayer: player,
         board
        }

      case 'reset':
        return InitialState
      default:
        throw new Error();
    }
  }

const ProviderContext = props => {
    
const [state, dispatch] = useReducer(reducer, InitialState)
    return (
      <MyContext.Provider value={{ state, dispatch }}>
        {props.children}
      </MyContext.Provider>
    );
  };

  export default ProviderContext; 