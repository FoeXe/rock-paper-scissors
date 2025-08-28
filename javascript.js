//Rock Paper Scissors
let humanScore = 0;
let computerScore = 0;

//1. Get computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

//2. Get human choice
function getHumanChoice() {
  return prompt('Write "Rock", "Paper" or "Scissors"');
}

//3. Play a single round
function playRound(humanChoice, computerChoice) {
  let humanChoiceLower = humanChoice.toLowerCase();
  let computerChoiceLower = computerChoice.toLowerCase();

  if (humanChoiceLower === computerChoiceLower) {
    return `Tie! You: ${humanChoice} vs. Computer: ${computerChoice}`;
  } else if (humanChoiceLower === "rock" && computerChoiceLower === "scissors") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoiceLower === "paper" && computerChoiceLower === "rock") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoiceLower === "scissors" && computerChoiceLower === "paper") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore += 1;
    return `You loose! ${computerChoice} beats ${humanChoice}`;
  } 
}

//4. Play a complete game (5 rounds)
function playGame() {
  //Play five rounds
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`Round ${i + 1}: ${playRound(humanSelection, computerSelection)}`)
  }
  //Present the final result
  console.log(`Final Result -> Your score: ${humanScore} | Computer score: ${computerScore}`)
}

playGame();
