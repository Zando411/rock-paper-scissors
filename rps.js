function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  choice = prompt();
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

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
  } else {
    message = "You lose!";
  }
}

function game() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();

  round(playerChoice, computerChoice);
  console.log(
    `You chose ${playerChoice}. Computer chose ${computerChoice}. ${message}`
  );
}

game();
