function Score(player1Score, player2Score) {
  this.player1Score = player1Score; 
  this.player2Score = player2Score; 
}

Score.prototype.scoreAddition = function (player, newScore) {
  if (player === "player1") {
    this.player1Score += newScore; 
    if (this.player1Score >= 100) {
    alert("Player 1 wins");
    }
    return this.player1Score;
  }
  else {
    this.player2Score += newScore; 
    if (this.player2Score >= 100) {
      alert("Player 2 wins");
      }
    return this.player2Score; 
  }
}

function randomNumber () {
  return Math.floor(Math.random() * 6) + 1; 
}

function switchPlayer (p1,p2) {
  [p1 , p2] = [p2, p1];
  return [p1,p2]; 
}

let runningScore = new Score(0,0);
let currentPlayer; 
let standbyPlayer; 
[currentPlayer , standbyPlayer] = ["player1", "player2"];
$(document).ready(function() {
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    let randomNumber1 = randomNumber();
    runningScore.scoreAddition(currentPlayer, randomNumber1);
    console.log(runningScore);
  });
  $("form#switchPlayer").submit(function(event) {
    event.preventDefault();
    [currentPlayer, standbyPlayer] = switchPlayer(currentPlayer, standbyPlayer);
  });
}); 




