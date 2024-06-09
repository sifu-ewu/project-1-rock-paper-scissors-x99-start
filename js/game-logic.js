
// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (
        (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') &&
        (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') &&
        (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') &&
        (moveOneValue >= 1 && moveOneValue <= 99) &&
        (moveTwoValue >= 1 && moveTwoValue <= 99) &&
        (moveThreeValue >= 1 && moveThreeValue <= 99) && (moveOneValue + moveTwoValue + moveThreeValue <= 99)
    ) {
        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    } else {
        return 'Invalid Input';
    }
}


function getRoundWinner(roundNumber) {
    let playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue;

    if (roundNumber === 1) {
        playerOneMoveType = playerOneMoveOneType;
        playerOneMoveValue = playerOneMoveOneValue;
        playerTwoMoveType = playerTwoMoveOneType;
        playerTwoMoveValue = playerTwoMoveOneValue;
    } else if (roundNumber === 2) {
        playerOneMoveType = playerOneMoveTwoType;
        playerOneMoveValue = playerOneMoveTwoValue;
        playerTwoMoveType = playerTwoMoveTwoType;
        playerTwoMoveValue = playerTwoMoveTwoValue;
    } else if (roundNumber === 3) {
        playerOneMoveType = playerOneMoveThreeType;
        playerOneMoveValue = playerOneMoveThreeValue;
        playerTwoMoveType = playerTwoMoveThreeType;
        playerTwoMoveValue = playerTwoMoveThreeValue;
    }
    if (playerOneMoveType && playerTwoMoveType && playerOneMoveValue && playerTwoMoveValue && roundNumber > 0 && roundNumber < 4) {

    if (playerOneMoveType === 'rock' && playerTwoMoveType ==='scissors') {
        return 'Player One';
    } else if (playerOneMoveType === 'rock' && playerTwoMoveType === 'paper') {
        return 'Player Two';
    } else if (playerOneMoveType === 'scissors' && playerTwoMoveType === 'paper') {
        return 'Player One';
    } else if (playerOneMoveType === 'paper' && playerTwoMoveType === 'rock') {
        return 'Player One';
    }else if (playerOneMoveType === 'scissors' && playerTwoMoveType === 'rock') {
        return 'Player Two';
    } else if (playerOneMoveType === 'paper' && playerTwoMoveType === 'scissors') {
        return 'Player Two';

    }else if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }
} else {
    return null;
}
}

function getGameWinner () {
    // Placeholder code, replace with actual implementation
    let playerOneWins = 0;
    let playerTwoWins = 0;
  for (let i = 1; i <= 3; i++) {
   
    if ( getRoundWinner(i) === 'Player One') {
      playerOneWins += 1;
    } else if ( getRoundWinner(i) === 'Player Two') {
      playerTwoWins += 1;
    }
  }
  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';           
  }

   
}

function setComputerMoves() {   
    // Add code here

}