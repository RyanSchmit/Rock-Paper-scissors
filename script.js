let computerChoice;
let userChoice;
let choices = ["rock", "paper", "scissors"]
let result;

function reset() {
	let images = document.querySelectorAll(".computer");
	images.forEach((image) => {
		image.style.backgroundColor = "white";
	})
}

function computerPlay() {
	reset();
	computerChoice = choices[Math.floor(Math.random() * 3)];
	let image = document.querySelector(".computer." + computerChoice);
	image.style.backgroundColor = "red";
}

function playRound() {
	let losingMessage = "You lost! " + computerChoice + " beats " + userChoice;
	let winningMessage = "You won! " + userChoice + " beats " + computerChoice;
	let tieMessage = "It's a tie! You both choose " + userChoice;
	if (userChoice == computerChoice) {
		return(tieMessage);
	}
	else if (userChoice == "rock" && computerChoice == "scissors") {
		return(winningMessage);
		result = 'win';
		alert(result);
	}
	else if (userChoice == "paper" && computerChoice == "rock") {
		return(winningMessage);
		result = 'win';
		alert(result);
	}
	else if (userChoice == "scissors" && computerChoice == "paper") {
		return(winningMessage);
		result = 'win';
		alert(result);
	}
	else if (userChoice == "rock" && computerChoice == "paper") {
		return(losingMessage);
		result = 'lose'
		alert(result);
	}
	else if (userChoice == "paper" && computerChoice == "scissors") {
		return(losingMessage);
		result = 'lose'
		alert(result);
	}
	else if (userChoice == "scissors" && computerChoice == "rock") {
		return(losingMessage);
		result = 'lose'
		alert(result);
	}
}

function game() {
	computerPlay();
	userChoice = this.id;
	let resultPlaceHolder = document.getElementById("result");       
	resultPlaceHolder.textContent = playRound();
}

const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
	button.addEventListener('click', game)
})

