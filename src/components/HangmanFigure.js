import React from "react";
import "../styles/HangmanFigure.css";
// Array of image paths representing different stages of the hangman figure
const hangmanImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
];

const HangmanFigure = ({ incorrectGuesses }) => {
  return (
    <div className="hangman-figure">
      {/* Display the current hangman image based on the number of incorrect guesses */}
      <img
        // Select the image corresponding to incorrect guesses
        src={hangmanImages[incorrectGuesses]}
        alt={`Hangman Stage ${incorrectGuesses}`}
        className="hangman-image"
      />
    </div>
  );
};

export default HangmanFigure;
