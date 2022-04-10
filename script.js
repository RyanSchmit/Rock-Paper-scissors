let choices = ['rock', 'paper', 'scissors'];
var computerChoice;
var userChoice;

function computerPlay() {
	computerChoice = choices[Math.floor(Math.random() * 3)]
}

function userPlay() {
	userChoice = prompt("Choice rock, paper, or scissors").trim().toLowerCase()
	while (true) {
		if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
			break
		} else {
			userPlay()
		}
	}
}

function playRound(playerSelection, computerSelection) {
	let losingMessage = "You lost! " + computerChoice + " beats " + userChoice
	let winningMessage = "You won! " + userChoice + " beats " + computerChoice
	let tieMessage = "It's a tie! You both choose " + userChoice
	if (userChoice == computerChoice) {
		return(tieMessage)
	}
	else if (userChoice == "rock" && computerChoice == "paper") {
		return(losingMessage)
	}
	else if (userChoice == "rock" && computerChoice == "scissors") {
		return(winningMessage)
	}
	else if (userChoice == "paper" && computerChoice == "scissors") {
		return(losingMessage)
	}
	else if (userChoice == "paper" && computerChoice == "rock") {
		return(winningMessage)
	}
	else if (userChoice == "scissors" && computerChoice == "rock") {
		return(losingMessage)
	}
	else if (userChoice == "scissors" && computerChoice == "paper") {
		return(winningMessage)
	}
}

function game() {
	userPlay()
	computerPlay()
	console.log(playRound(userChoice, computerChoice))
}

game()
