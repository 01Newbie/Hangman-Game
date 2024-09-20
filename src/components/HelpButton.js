import React, { useState } from "react";

const HelpButton = () => {
  // State to manage visibility of help content
  const [showHelp, setShowHelp] = useState(false);

  // Toggle help content visibility
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="help-section">
      <button onClick={toggleHelp}>Help</button>
      {showHelp && (
        <div className="help-content">
          <p>
            Hangman is a word-guessing game where the objective is to guess a
            hidden word by suggesting letters within a certain number of
            attempts.
          </p>
          <ul>
            <li>
              <strong>How to Play:</strong>
            </li>
            <li>The game will randomly select a word for you to guess.</li>
            <li>
              You will see a series of underscores representing each letter in
              the word.
            </li>
            <li>
              Input a letter you think is in the word. If you guess correctly,
              the letter will replace the corresponding underscore(s).
            </li>
            <li>
              If your guess is incorrect, you will lose one of your limited
              attempts.
            </li>
            <li>
              You have a total of 6 incorrect guesses before the game is over.
            </li>
            <li>Try to guess the word before you run out of attempts!</li>
          </ul>
          <p>Good luck!</p>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
