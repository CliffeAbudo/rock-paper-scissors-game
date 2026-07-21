let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber <= 0.33) return "rock";
  if (randomNumber < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  humanChoice = humanChoice.toLowerCase();

  let message = "";

  if (humanChoice === computerChoice) {
    message = "It's a draw!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    message = "Human wins! Rock beats Scissors.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    message = "Human wins! Paper beats Rock.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    message = "Human wins! Scissors beats Paper.";
  } else {
    computerScore++;
    message = "Computer wins!";
  }

  if (humanScore === 5) {
    message = "🎉 Human wins the game!";
  } else if (computerScore === 5) {
    message = "🤖 Computer wins the game!";
  }

  div.textContent = `${message}

Human: ${humanScore}
Computer: ${computerScore}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
