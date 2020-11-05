//Constructor for our score object 
function Score (player1Score, player2Score) {
  this.player1Score = player1Score; 
  this.player2Score = player2Score; 
}

//Business Logic for playing another human locally on the website 
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
    return [currentPlayer, standbyPlayer, scoreTotal];
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
    return [currentPlayer, standbyPlayer, scoreTotal];
  }
}

function switchPlayer (p1,p2,scoreTotal) {
  [p1 , p2] = [p2, p1];
  scoreTotal = 0;
  return [p1,p2,scoreTotal]; 
}

//Business logic for playing a computer 
Score.prototype.scoreAdditionIfPlayingComputer = function (newScore, scoreTotal) {
  $("#userAlert").hide();
  this.player1Score += newScore; 
  scoreTotal += newScore; 
  if (this.player1Score >= 100) {
  alert("Player 1 wins");
  }
  if (newScore === 1) {
    this.player1Score = this.player1Score - scoreTotal;
    let roll = randomNumber();
    alert("roll 1 is : " + roll)
    if (roll === 1) {
      $("#userAlert").show();
      scoreTotal = 0;
    }
    else {
      let roll1 = randomNumber(); 
      alert("roll 2 is : " + roll1);
        if (roll1 === 1) {
          this.player2Score += roll; 
          $("#userAlert").show();
          scoreTotal = 0;
        }
        else {
          this.player2Score += roll; 
          this.player2Score += roll1; 
          scoreTotal = 0; 
          $("#userAlert").show();
          if (this.player2Score >= 100) {
            alert("the computer wins");
            }
          }
        }
      }
  return scoreTotal;
}

Score.prototype.switchPlayerIfPlayingComputer = function () {
  let roll = randomNumber();
  let scoreTotal = 0
  alert("roll 1 is : " + roll)
  if (roll === 1) {
    $("#userAlert").show();
  }
  else {
    let roll1 = randomNumber(); 
    alert("roll 2 is : " + roll1);
      if (roll1 === 1) {
        this.player2Score += roll; 
        $("#userAlert").show();
      }
      else {
        this.player2Score += roll; 
        this.player2Score += roll1; 
        $("#userAlert").show();
        if (this.player2Score >= 100) {
          alert("the computer wins");
          }
        }
      }
  return scoreTotal;
}

//business logic used in both playing another human and playing a computer scenarios 
function randomNumber () {
  return Math.floor(Math.random() * 6) + 1; 
}

$(document).ready(function() {
  let runningScore = new Score(0,0);
  let [currentPlayer , standbyPlayer] = ["player1", "player2"];
  let scoreTotalTracker = 0; 
  let x = "human"; 
  $("#computer").click(function (){
    x="computer";
  });
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    let randomNumber1 = randomNumber();
    if (x === "human") {
      [currentPlayer, standbyPlayer, scoreTotalTracker] = runningScore.scoreAddition(currentPlayer, standbyPlayer, randomNumber1, scoreTotalTracker);
      $(".player1").text(runningScore.player1Score);
      $(".player2").text(runningScore.player2Score);
      $(".newScore").text(randomNumber1);
    }
    else {
      scoreTotalTracker = runningScore.scoreAdditionIfPlayingComputer(randomNumber1, scoreTotalTracker);
      $(".player1").text(runningScore.player1Score);
      $(".player2").text(runningScore.player2Score);
      $(".newScore").text(randomNumber1);
    }
  });
  $("form#switchPlayer").submit(function(event) {
    event.preventDefault();
    if (x === "human") {
      [currentPlayer, standbyPlayer, scoreTotalTracker] = switchPlayer(currentPlayer, standbyPlayer);
    }
    else {
      scoreTotalTracker = runningScore.switchPlayerIfPlayingComputer();
      $(".player2").text(runningScore.player2Score);
    }
  });
}); 
