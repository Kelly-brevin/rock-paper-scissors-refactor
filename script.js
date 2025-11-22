//LOGIC TO TRACK, UPDATE AND RESET SCORES
function createScoreTracker() {
  let playerScore = 0;
  let computerScore = 0;
  let drawCount = 0;

  return {
    //the update method has access to the variables in the parent function, creating closure
    update(result) {
      //object method shorthand syntax to define functions
      if (result === "win") {
        playerScore++;
        document.getElementById("playerScore").textContent =
          "Wins : " + playerScore;
      } else if (result === "Lose") {
        computerScore++;
        document.getElementById("computerScore").textContent =
          "loses: " + computerScore;
      } else if (result === "Draw") {
        drawCount++;
        document.getElementById("drawCount").textContent =
          "Draws: " + drawCount;
      }
    },
    reset() {
      playerScore = 0;
      computerScore = 0;
      drawCount = 0;
      document.getElementById("playerScore").textContent = "Wins: 0";
      document.getElementById("computerScore").textContent = "Losses: 0";
      document.getElementById("drawCount").textContent = "Draws: 0";
    },
  };
}
// GAME LOGIC
const game = {
  scoreTracker: createScoreTracker(),
  computerMove: "",
  result: "",

  pickComputerMove() {
    const randomNumber = Math.random();
    this.computerMove =
      randomNumber <= 0.3 ? "rock" : randomNumber <= 0.6 ? "paper" : "scissors";
  },

  play(playerMove) {
    this.pickComputerMove();
    const move = this.computerMove;

    if (playerMove === move) {
      alert(`The computer chose ${move}, it's a draw!`);
      this.result = "draw";
    } else if (
      (playerMove === "rock" && move === "scissors") ||
      (playerMove === "paper" && move === "rock") ||
      (playerMove === "scissors" && move === "paper")
    ) {
      alert(`The computer chose ${move}, you win!`);
      this.result = "win";
    } else {
      alert(`The computer chose ${move}, you lose`);
      this.result = "lose";
    }
    this.scoreTracker.update(this.result);
  },
};

//SETUP THE BUTTONS
document.getElementById("rock").addEventListener("click", () => {
  game.play("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  game.play("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  game.play("scissors");
});
document.getElementById("reset").addEventListener("click", () => {
  game.scoreTracker.reset();
});
