function Score(player1Score, player2Score) {
  this.player1Score = player1Score; 
  this.player2Score = player2Score; 
}

Score.prototype.scoreAddition = function (currentPlayer, standbyPlayer, newScore, scoreTotal) {
  if (currentPlayer === "player1") {
    this.player1Score += newScore; 
    scoreTotal += newScore; 
    if (this.player1Score >= 100) {
    alert("Player 1 wins");
    }
    if (newScore === 1) {
      this.player1Score = this.player1Score - scoreTotal;
      [currentPlayer, standbyPlayer, scoreTotal] = switchPlayer(currentPlayer, standbyPlayer, scoreTotal);
    }
    return [currentPlayer, standbyPlayer, scoreTotal]
  }
  else {
    this.player2Score += newScore; 
    scoreTotal += newScore; 
    if (this.player2Score >= 100) {
      alert("Player 2 wins");
      }
    if (newScore === 1) {
      this.player2Score = this.player2Score - scoreTotal;
      [currentPlayer, standbyPlayer, scoreTotal] = switchPlayer(currentPlayer, standbyPlayer, scoreTotal);
    }
    return [currentPlayer, standbyPlayer, scoreTotal]
  }
}

function randomNumber () {
  return Math.floor(Math.random() * 6) + 1; 
}

function switchPlayer (p1,p2,scoreTotal) {
  [p1 , p2] = [p2, p1];
  scoreTotal = 0;
  return [p1,p2,scoreTotal]; 
}

let runningScore = new Score(0,0);
let currentPlayer; 
let standbyPlayer; 
[currentPlayer , standbyPlayer] = ["player1", "player2"];
let scoreTotalTracker = 0; 

$(document).ready(function() {
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    let randomNumber1 = randomNumber();
    [currentPlayer, standbyPlayer, scoreTotalTracker] = runningScore.scoreAddition(currentPlayer, standbyPlayer, randomNumber1, scoreTotalTracker);
    console.log(runningScore);
  });
  $("form#switchPlayer").submit(function(event) {
    event.preventDefault();
    [currentPlayer, standbyPlayer, scoreTotalTracker] = switchPlayer(currentPlayer, standbyPlayer);
  });
}); 




