let choices = ['rock', 'paper', 'scissors']
let userChoice = prompt("Choice rock, paper, or scissors").trim().toLowerCase()
let computerChoice = choices[Math.floor(Math.random() * 3)]

if (userChoice == computerChoice) {
	console.log("It's a tie")
}
else if (userChoice == "rock" && computerChoice == "paper") {
	console.log("You lost")
}
else if (userChoice == "rock" && computerChoice == "scissors") {
	console.log("You won")
}
else if (userChoice == "paper" && computerChoice == "scissors") {
	console.log("You lost")
}
else if (userChoice == "paper" && computerChoice == "rock") {
	console.log("You won")
}
else if (userChoice == "scissors" && computerChoice == "rock") {
	console.log("You lost")
}
else if (userChoice == "scissors" && computerChoice == "paper") {
	console.log("You won")
}

console.log("You choose " + userChoice)
console.log("The computer choose " + computerChoice)