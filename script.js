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
