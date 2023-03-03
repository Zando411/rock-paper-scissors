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

console.log(playerChoice, computerChoice);
