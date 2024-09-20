import React, { useState } from "react";

// GuessForm component handles the input form where the user can guess letters
const GuessForm = ({ onGuess, disabled }) => {
  // State to hold the value of the input field
  const [input, setInput] = useState("");

  // Handle form submission for a guess
  const handleSubmit = (e) => {
    // Prevent form from reloading the page
    e.preventDefault();
    // If input is not empty and the game is not disabled
    if (input && !disabled) {
      // Call the onGuess function and pass the guessed letter in lowercase
      onGuess(input.toLowerCase());
      // Clear the input field after submitting the guess
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for user to type their guess */}
      <input
        type="text"
        value={input} // Bind input value to state
        onChange={(e) => setInput(e.target.value)} // Update state on change
        maxLength="1" // Limit input to one letter
        disabled={disabled} // Disable input field when the game is won/lost
      />
      {/* Submit button to make a guess */}
      <button type="submit" disabled={disabled}>
        Guess
      </button>
      {/* Button is disabled if the game is over */}
    </form>
  );
};

export default GuessForm;
