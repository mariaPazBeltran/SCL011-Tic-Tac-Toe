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
        const checkBoardIsFull = (board) => {
          /*
          Retorna 'true', si todad las posiciones en el tablero están ocupadas
           con un valor diferente a null, de lo contrario, devuelve 'false'.
          */
          let isFull = true;
          [0, 1, 2].map((row) => {
            [0, 1, 2].map((col) => {
              if (board[row][col] === null) {
                isFull = false;
              }
            });
          });
          return isFull;
        };
        const winningCombination = (combinationValues) => {
          /*
          Retorna 'true' si son las siguientes combinaciones
          ["X", "X", "X"], ["O", "O", "O"], de lo contrario,
          retorna 'false'.
          */
          const xWins = !combinationValues.filter(()=>'X').length;
          const oWins = !combinationValues.filter(()=>'O').length;
          return xWins || oWins;
        };
        const checkWinningCombination = (board) => {
          const combinations = [
            // horizontals
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
      
            // verticals
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
      
            // diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
          ];
          let foundWinningCombination = false;
          combinations.forEach((combination) => {
            const combinationValues = [];
            combination.forEach( (position) => {
              const row = position[0];
              const col = position[1];
              combinationValues.push(board[row][col]);
            });
            if (winningCombination(combinationValues)) {
              foundWinningCombination = true;
            }
          });
          return foundWinningCombination;
        };
      
        const checkGameOver = (board) => {
          if (checkWinningCombination(board)) {
            return state.nextPlayer;
          }
          if (checkBoardIsFull(board)) {
            return null;
          }
          return false;
        };

        const player = state.nextPlayer === 'X' ? 'O' : 'X';
        const board = updateBoard(state.board)
        const result = checkGameOver(board);
      let winner;
      let gameOver;
      if (result === false) {
        winner = null;
        gameOver = false;
      } else {
        winner = result;
        gameOver = true;
      }
        
       return {
        ...state,
        winner,
        nextPlayer: player,
        gameOver,
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