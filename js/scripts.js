function Score(player1Score, player2Score) {
  this.player1Score = player1Score; 
  this.player2Score = player2Score; 
}


Score.prototype.scoreAddition = function (player, newScore) {
  if (player === "player1") {
    this.player1Score += newScore; 
    return this.player1Score;
  }
  else {
    this.player2Score += newScore; 
    return this.player2Score; 
  }
}

let runningScore = new Score(0,0);

$(document).ready(function() {
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    runningScore.scoreAddition("player1", 5);
    console.log(runningScore);
  });
}); 