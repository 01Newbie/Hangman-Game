import React, { useState, useEffect } from "react";
import HangmanFigure from "./HangmanFigure";
import GameBoard from "./GameBoard";
import GuessForm from "./GuessForm";
import GameInfo from "./GameInfo";
import HelpButton from "./HelpButton";
import "../styles/Hangman.css";

const Hangman = () => {
  // List of possible words for the game
  const words = ["react", "javascript", "hangman", "frontend", "developer"];

  // State variables to manage the game state
  // The current word to guess
  const [word, setWord] = useState("");
  // Letters guessed by the user
  const [guessedLetters, setGuessedLetters] = useState([]);
  // Count of incorrect guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  // Current status of the game (playing, won, lost)
  const [gameStatus, setGameStatus] = useState("playing");

  // Initialize the game with a random word on component mount
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // Debug output to see the selected word
    console.log("Selected Word:", randomWord);
    // Set the randomly selected word
    setWord(randomWord);
    // Reset guessed letters
    setGuessedLetters([]);
    // Reset incorrect guesses
    setIncorrectGuesses(0);
    // Set the game status to playing
    setGameStatus("playing");
  }, []);

  // Check game status after every guess
  useEffect(() => {
    console.log("Game Status Check:", {
      word,
      guessedLetters,
      incorrectGuesses,
      gameStatus,
    });

    // Check if the user has lost (more than 6 incorrect guesses)
    if (incorrectGuesses >= 6) {
      // Set game status to lost
      setGameStatus("lost");
      // Check if the user has won (all letters guessed)
    } else if (
      word &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      // Set game status to won
      setGameStatus("won");
    }
  }, [guessedLetters, incorrectGuesses, word]);

  const handleGuess = (letter) => {
    // Only allow guessing while the game is in progress
    if (gameStatus === "playing" && !guessedLetters.includes(letter)) {
      // Check if the guessed letter is in the word
      if (word.includes(letter)) {
        // Add letter to guessed letters
        setGuessedLetters([...guessedLetters, letter]);
      } else {
        // Increment incorrect guesses
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  // Restart the game with a new word and reset the state
  const restartGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // Debug output for the new word
    console.log("New Word:", randomWord);
    // Set a new random word
    setWord(randomWord);
    // Reset guessed letters
    setGuessedLetters([]);
    // Reset incorrect guesses
    setIncorrectGuesses(0);
    // Set game status to playing
    setGameStatus("playing");
  };

  return (
    <div className="hangman-container">
      {/* Main container for the Hangman game */}
      <div className="hangman-content">
        {/* Component displaying the Hangman figure based on incorrect guesses */}
        <HangmanFigure incorrectGuesses={incorrectGuesses} />
        <div className="game-details">
          {/* Component displaying the word to guess with guessed letters */}
          <GameBoard word={word} guessedLetters={guessedLetters} />
          {/* Form for submitting letter guesses */}
          <GuessForm
            onGuess={handleGuess}
            disabled={gameStatus !== "playing"}
          />
          {/* Component showing game status and restart option */}
          <GameInfo status={gameStatus} onRestart={restartGame} />
          {/* Help button that shows game instructions */}
          <HelpButton /> {/* Add the HelpButton here */}
        </div>
      </div>
    </div>
  );
};

export default Hangman;
