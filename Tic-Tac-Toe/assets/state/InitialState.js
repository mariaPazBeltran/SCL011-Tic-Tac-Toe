const InitialState = {
  colNum: [0,1,2],
  rowNum: [0,1,2],
  winner: null,
  nextPlayer: 'X',
  gameOver: false,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  newBoard: null,
};
export default InitialState;