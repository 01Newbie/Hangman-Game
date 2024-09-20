import React from "react";
import PropTypes from "prop-types";

//GameBoard Component
const GameBoard = ({ word, guessedLetters }) => {
  return (
    //Container for displaying the word
    <div className="game-board">
      {word.split("").map((letter, index) => (
        // For each letter in the word, display the letter if it's been guessed, otherwise display an underscore (_)
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

// PropTypes ensures that the component receives the correct data types
GameBoard.propTypes = {
  // `word` is required and must be a string
  word: PropTypes.string.isRequired,
  // `guessedLetters` is required and must be an array of strings
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GameBoard;
