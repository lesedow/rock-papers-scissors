function computerPlay() {
	const choices = ["rock", "paper", "scissors"]; 
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === computerSelection) {
		return "It's a draw !";
	} 

	if (playerSelection.toLowerCase() === "rock") {
		if (computerSelection === "paper") {
			return "You Lose ! Paper beats Rock!";
		}
		return "You win ! Rock beats Scissors!";
	}

	if (playerSelection.toLowerCase() === "paper") {
		if (computerSelection === "scissors") {
			return "You Lose ! Scissors beats Paper!";
		}
		return "You Win ! Paper beats Rock!";
	}

	if (playerSelection.toLowerCase() === "scissors") {
		if (computerSelection === "rock") {
			return "You Lose ! Rock beats Scissors!";
		}
		return "You win ! Scissors beats Paper!";
	}

	return "Something went wrong!!!!!";
}

function game() {
	for (let i = 0; i < 5; i++) {
		const computerChoice = computerPlay();
		const playerChoice = prompt("Select (rock, paper or scissors) > ");
		console.log(playRound(playerChoice, computerChoice));
	}
}

game();

