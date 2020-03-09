import swords from '../img/swords.png'
import shield from '../img/shield.png'
const InitialState = {
  winner: null,
  nextPlayer: swords,
  gameOver: false,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  newBoard: null,
};
export default InitialState;