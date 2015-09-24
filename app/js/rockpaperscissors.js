function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay(); 
}

function getWinner(playerMove,computerMove) {
    var winner;
	if (playerMove == "rock") {
		if (computerMove == "rock") {
			winner = "tie";
		}
		else if (computerMove == "paper") {
			winner = "computer";
		}
		else {
			winner = "player";
		}
	}
	else if (playerMove == "paper") {
		if (computerMove == "paper") {
			winner = "tie";
		}
		else if (computerMove == "scissors") {
			winner = "computer";
		}
		else {
			winner = "player";
		}
	}
	else if (playerMove == "scissors") {
		if (computerMove == "scissors") {
			winner = "tie";
		}
		else if (computerMove == "rock"){
			winner = "computer";
		}
		else {
			winner = "player";
		}
	}
return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5){
		var playerMove = getPlayerMove(getInput());
		var computerMove = getComputerMove(randomPlay());
		var winner = getWinner(playerMove, computerMove);

		if (winner === "player"){
			console.log("You picked " + playerMove + " and the computer picked " + computerMove + ". The point goes to you!”);
			playerWins++;
		}
		else if (winner === "computer"){
			console.log("You picked " + playerMove + " and the computer picked " + computerMove + ". The point goes to the Computer!”);
			computerWins++;
		}
		else{
			console.log(“It’s a tie!!!”);
		}

		console.log("Player: " + playerWins + " Computer: " + computerWins);

    }
    if (computerWins == 5) {
        console.log ("Computer Wins! " + computerWins + " to " + playerWins);
    }
    else {
        console.log ("Player Wins! " + playerWins + " - " + computerWins);
    }
}

playToFive();