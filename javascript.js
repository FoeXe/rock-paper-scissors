// Rock Paper Scissor
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

//1. Get computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

//2. Play a single round
function playRound(humanChoice, computerChoice) {
  let humanChoiceLower = humanChoice.toLowerCase();
  let computerChoiceLower = computerChoice.toLowerCase();

  if (humanChoiceLower === computerChoiceLower) {
    return "Tie!";
  } else if (
    (humanChoiceLower === "rock" && computerChoiceLower === "scissors") ||
    (humanChoiceLower === "paper" && computerChoiceLower === "rock") ||
    (humanChoiceLower === "scissors" && computerChoiceLower === "paper")
  ) {
    humanScore += 1;
    return "You win!";
  } else {
    computerScore += 1;
    return "Computer wins!";
  }
}

//3. DOM Elemente
const buttons = document.querySelectorAll(".choice_button");
const scores = document.querySelectorAll(".score");
const roundDisplay = document.querySelector(".round");
const resultDisplay = document.querySelector(".round_result");
const restartButton = document.querySelector(".restart_button");

//4. Event Listener für Spiel
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (gameRound > 5) return; // Spiel vorbei

    let humanSelection = button.getAttribute("data-choice");
    let computerSelection = getComputerChoice();

    //Update choices
    document.querySelector(".pending_choice").innerText = getEmoji(humanSelection);
    document.querySelector(".com_pending_choice").innerText = getEmoji(computerSelection);

    //Round Ergebnis anzeigen
    const roundResult = playRound(humanSelection, computerSelection);
    resultDisplay.innerText = roundResult;

    //Nach 3 Sekunden zurücksetzen (nur wenn Spiel nicht vorbei)
    setTimeout(() => {
      if (gameRound <= 5) {
        resultDisplay.innerText = "Best of 5 rounds!";
      }
    }, 3000);

    //Update scores
    scores[0].innerText = humanScore;
    scores[1].innerText = computerScore;

    //Update round
    roundDisplay.innerText = `Round ${gameRound}`;
    gameRound++;

    //Check if game is finished
    if (gameRound > 5) {
      if (humanScore > computerScore) {
        resultDisplay.innerText = "🎉 You won the game!";
      } else if (computerScore > humanScore) {
        resultDisplay.innerText = "🤖 Computer wins the game!";
      } else {
        resultDisplay.innerText = "🤝 It's a tie!";
      }
      restartButton.style.display = "block"; // Restart zeigen
    }
  });
});

//5. Restart Funktion
restartButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  gameRound = 1;

  scores[0].innerText = 0;
  scores[1].innerText = 0;
  roundDisplay.innerText = "Round 0";
  resultDisplay.innerText = "Best of 5 rounds!";
  document.querySelector(".pending_choice").innerText = "❓";
  document.querySelector(".com_pending_choice").innerText = "🤖";

  restartButton.style.display = "none"; // Button wieder verstecken
});

// Hilfsfunktion: Emojis
function getEmoji(choice) {
  let lowerChoice = choice.toLowerCase();
  if (lowerChoice == "rock") return "✊";
  if (lowerChoice == "paper") return "✋";
  return "✌️";
}
