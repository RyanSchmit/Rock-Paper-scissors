let computerChoice;
let userChoice;
let choices = ["rock", "paper", "scissors"]

function computerPlay() {
	computerChoice = choices[Math.floor(Math.random() * 3)];
}

function playRound() {
	let losingMessage = "You lost! " + computerChoice + " beats " + userChoice;
	let winningMessage = "You won! " + userChoice + " beats " + computerChoice;
	let tieMessage = "It's a tie! You both choose " + userChoice;
	if (userChoice == computerChoice) {
		return(tieMessage);
	}
	else if (userChoice == "rock" && computerChoice == "paper") {
		return(losingMessage);
	}
	else if (userChoice == "rock" && computerChoice == "scissors") {
		return(winningMessage);
	}
	else if (userChoice == "paper" && computerChoice == "scissors") {
		return(losingMessage);
	}
	else if (userChoice == "paper" && computerChoice == "rock") {
		return(winningMessage);
	}
	else if (userChoice == "scissors" && computerChoice == "rock") {
		return(losingMessage);
	}
	else if (userChoice == "scissors" && computerChoice == "paper") {
		return(winningMessage);
	}
}

function game() {
	computerPlay();
	userChoice = this.id;
	alert(playRound());
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener('click', game)
})

