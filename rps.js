function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");

let clickedButton = "";

Rock.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  console.log(
    `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`
  );
});

Paper.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  console.log(
    `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`
  );
});

Scissors.addEventListener("click", function (event) {
  const clickedButton = event.target.id;
  const computerChoice = getComputerChoice();
  round(clickedButton, computerChoice);
  console.log(
    `You chose ${clickedButton}. Computer chose ${computerChoice}. ${message}`
  );
});

const computerChoice = getComputerChoice();
let playerChoice = clickedButton;

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

//**OLD CODE**//

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
