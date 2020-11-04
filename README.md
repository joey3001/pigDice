| Test | Input | Output |
| :--------------------------- | :------------------------| :---------------- | 
| scoreAddition |||
| Should iteratively add the users new score, which is the result of their dice roll, to their previous score every time scoreAddition() is called | previous score(20) + new score(5) | 25 |
| Should alert users of a winner when a player's score reaches 100 | player1Score = 100 | "Player 1 wins" | 
| Should subtract total accumulated turn score from player's score upon player rolling a 1. | new score = 1 | previoius score(20) + new score(5) = current score(25) , previous score(25) + new score(1) = current score(20) | 


| randomNumber |||
| Should generate random number between 1 - 6 when "roll dice" button is clicked.| n/a | "roll dice" = (number 1-6) |

| switchPlayer |||
| Should switch player receiveing points for "rolling dice" when the switch player button is pressed. The player receiving points for dice rolls is defined as the "current player." | joe = current player , parker = standby player | parker = current player , joe = standby player |
| Should switch player turns upon dice rolling a 1 | player1 rolls 1 | switch turns to player 2 |
