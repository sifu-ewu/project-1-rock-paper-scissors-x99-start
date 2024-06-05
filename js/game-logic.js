function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (player === PLAYER_ONE) {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === PLAYER_TWO) {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

function getRoundWinner(roundNumber) {
  const playerOneMove = getPlayerMove(PLAYER_ONE, roundNumber);
  const playerTwoMove = getPlayerMove(PLAYER_TWO, roundNumber);
  if (playerOneMove.type === playerTwoMove.type) {
    return TIE;
  } else if (playerOneMove.type === 'rock') {
    if (playerTwoMove.type === 'scissors') {
      return PLAYER_ONE;
    } else {
      return PLAYER_TWO;
    }
  } else if (playerOneMove.type === 'paper') {
    if (playerTwoMove.type === 'rock') {
      return PLAYER_ONE;
    } else {
      return PLAYER_TWO;
    }
  } else if (playerOneMove.type === 'scissors') {
    if (playerTwoMove.type === 'paper') {
      return PLAYER_ONE;
    } else {
      return PLAYER_TWO;
    }
  }
}

function getGameWinner() {
  const playerOneWins = getRoundWinner(1) === PLAYER_ONE;
  const playerTwoWins = getRoundWinner(2) === PLAYER_TWO;
  if (playerOneWins && playerTwoWins) {
    return TIE;
  } else if (playerOneWins) {
    return PLAYER_ONE;
  } else if (playerTwoWins) {
    return PLAYER_TWO;
  } else {
    return TIE;
  }
}

function getPlayerMove(player, roundNumber) {
  if (player === PLAYER_ONE) {
    return {
      type: playerOneMoves[roundNumber - 1].type,
      value: playerOneMoves[roundNumber - 1].value,
    };
  } else if (player === PLAYER_TWO) {
    return {
      type: playerTwoMoves[roundNumber - 1].type,
      value: playerTwoMoves[roundNumber - 1].value,
    };
  }
}
 
const PLAYER_ONE = 'Player One';
const PLAYER_TWO = 'Player Two';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const TIE = 'Tie';
let playerOneMoves = [];
let playerTwoMoves = [];
let playerOneMoveOneType = null;
let playerOneMoveOneValue = null;
let playerOneMoveTwoType = null;
let playerOneMoveTwoValue = null;
let playerOneMoveThreeType = null;
let playerOneMoveThreeValue = null;
let playerTwoMoveOneType = null;
let playerTwoMoveOneValue = null;
let playerTwoMoveTwoType = null;
let playerTwoMoveTwoValue = null;
let playerTwoMoveThreeType = null;
let playerTwoMoveThreeValue = null;
