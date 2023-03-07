const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

let clickedButton = "";

Rock.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  result.textContent = `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`;
  updateScore();
});

Paper.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  result.textContent = `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`;
  updateScore();
});

Scissors.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  result.textContent = `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`;
  updateScore();
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

let message = "";

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    message = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message = "You win!";
    playerScore++;
  } else {
    message = "You lose!";
    computerScore++;
  }
}

function updateScore() {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

//**OLD CODE**//

// const computerChoice = getComputerChoice();
// let playerChoice = getPlayerChoice();

// function game() {
//   const computerChoice = getComputerChoice();
//   const playerChoice = getPlayerChoice();

//   round(playerChoice, computerChoice);
//   console.log(
//     `You chose ${playerChoice}. Computer chose ${computerChoice}. ${message}`
//   );
// }

// function getPlayerChoice() {
//   choice = prompt();
//   return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
// }
