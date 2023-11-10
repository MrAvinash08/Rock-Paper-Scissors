import React, { useState } from "react";
import "./App.css";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);
    if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setPlayerScore(playerScore + 1);
    } else if (choice === computerChoice) {
      setResult("It's a tie!");
    } else {
      setResult("Computer wins!");
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <div className="choice" onClick={() => handlePlayerChoice("rock")}>
          <span role="img" aria-label="Rock">
            🪨
          </span>
        </div>
        <div className="choice" onClick={() => handlePlayerChoice("paper")}>
          <span role="img" aria-label="Paper">
            📄
          </span>
        </div>
        <div className="choice" onClick={() => handlePlayerChoice("scissors")}>
          <span role="img" aria-label="Scissors">
            ✂️
          </span>
        </div>
      </div>
      <h1>{result}</h1>
      <div className="score">
        <h1 className="scoreBoards">You: {playerScore}</h1>
        <h1 className="scoreBoards"> {playerChoice}</h1>
        <h1 className="scoreBoards"> Computer: {computerScore}</h1>
        <h1 className="scoreBoards"> {computerChoice}</h1>
      </div>
    </div>
  );
}

export default App;
