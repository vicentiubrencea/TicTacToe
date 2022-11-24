let winPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8], 
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let gameTurns = 0;
let playerXpositions = [], player0positions = [];
document.getElementById("message").innerHTML = "Player X goes first!";

function playGame(index) {
    if (gameTurns % 2 == 0) {
        document.getElementById("message").innerHTML = "Player 0 turn";
        document.getElementById(index).innerHTML = 'X';
        playerXpositions.push(index);
        document.getElementById(index).onclick = null;
    } else {
        document.getElementById(index).innerHTML = '0';
        player0positions.push(index);
        document.getElementById(index).onclick = null;
        document.getElementById("message").innerHTML = "Player X turn";
    }
    ++gameTurns;
    if (playerXpositions.length >= 3) {
        checkWinner(playerXpositions);
    }
    if (player0positions.length >= 3) {
        checkWinner(player0positions);
    }
}

let foundWinner = 0, theWinner;

function checkWinner(positions) {
    for (let i = 0; i < winPositions.length; ++i) {
        let winPos = winPositions[i];
            const winnerCheck = winPos.every(winPos => {
            return positions.includes(winPos);
        });
        if (winnerCheck == true) {
            foundWinner = 1;
            if (positions == playerXpositions) {
                theWinner = "X";
            } else {
                theWinner = "0";
            }
            document.getElementById("message").innerHTML = "";
            document.getElementById("message2").innerHTML = "Player " + theWinner + " won the game!";
            for (let i = 1; i <= 9; ++i) {
                document.getElementById(i).onclick = null;          
            }                     
        }           
    }
    if (foundWinner == 0 && gameTurns == 9) {
        document.getElementById("message2").innerHTML = "DRAW!";
        document.getElementById("message").innerHTML = "";  
    }  
}