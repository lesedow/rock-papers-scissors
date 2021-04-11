// I'm noob send help pls

// Menu Variables
const mainMenu = document.getElementById('menu');
const playButton = document.getElementById('play');

// Game Variables
const gameWrapper = document.getElementById('game');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const logs = document.getElementById('logs');
const scoreElement = document.getElementById('score');

// Score
let playerScore = 0;
let computerScore = 0;

function computerSelection() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {return "It's a draw!"};

	if (playerChoice === 'rock') {
		if (computerChoice === 'paper') {
			computerScore += 1;
			return "You lost! Paper beats Rock."
		}
		playerScore += 1;
		return "You won! Rock beats Scissors";
	}

	if (playerChoice === 'paper') {
		if (computerChoice === 'scissors') {
			computerScore += 1;
			return "You lost! Scissors beats Paper."
		}
		playerScore += 1;
		return "You won! Paper beats Rock";
	}

	if (playerChoice === 'scissors') {
		if (computerChoice === 'rock') {
			computerScore += 1;
			return "You lost! Rock beats Scissors."
		}
		playerScore += 1;
		return "You won! Scissors beats Paper";
	}

}

function mainGame() {
	const buttons = Array.from([rockBtn, paperBtn, scissorsBtn]);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			let playerChoice = buttons[i].id;
			let computerChoice = computerSelection();
			let roundResults = playRound(playerChoice, computerChoice);

			// Display results on screen
			logs.innerText = roundResults;
			scoreElement.innerText = `${playerScore} : ${computerScore}`;

		})
	}
}

// Checking for click event on the play button from the main menu
playButton.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	gameWrapper.style.display = 'flex';
	mainGame();
});