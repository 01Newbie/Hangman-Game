import React from "react";

// GameInfo component displays the game's status message and provides a button to restart the game
const GameInfo = ({ status, onRestart }) => {
  return (
    <div className="game-info">
      {/* Display a message based on the game status */}
      {status === "playing" && <p>Guess the word!</p>}{" "}
      {/* Message shown when the game is in progress */}
      {status === "won" && <p>Congratulations, you won!</p>}{" "}
      {/* Message shown when the player wins */}
      {status === "lost" && <p>Sorry, you lost! Try again.</p>}{" "}
      {/* Message shown when the player loses */}
      {/* Button to restart the game by calling the onRestart function */}
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default GameInfo;
