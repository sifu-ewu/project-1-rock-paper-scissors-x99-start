
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
        return;
    }
}


function getRoundWinner(roundNumber) {
    if (playerOneMoveOneType == 'rock' && playerTwoMoveOneType == 'scissors') {
        return 'Player One';
    } else if (playerOneMoveOneType == 'rock' && playerTwoMoveOneType == 'paper') {
         return 'Player Two';
    }
    
}

function getGameWinner () {
    // Placeholder code, replace with actual implementation
   
}

function setComputerMoves() {   
    // Add code here

}