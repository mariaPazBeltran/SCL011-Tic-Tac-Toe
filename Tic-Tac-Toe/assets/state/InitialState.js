const InitialState = () => ({
  boardId: null,
  winner: null,
  nextPlayer: 'X',
  gameOver: false,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  newBoard: null,
  loading: false
});
export default InitialState;