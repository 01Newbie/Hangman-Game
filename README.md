# Hangman Game

Welcome to the Hangman Game! This is a simple word-guessing game built using React. The objective of the game is to guess a hidden word by suggesting letters, within a limited number of incorrect guesses.

## Table of Contents

- [Game Rules](#game-rules)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Game Rules

1. A random word is selected for you to guess.
2. You can guess one letter at a time.
3. If the letter is in the word, it will be revealed in its correct position(s).
4. If the letter is not in the word, you will lose one of your allowed attempts.
5. You can make up to 6 incorrect guesses before losing the game.
6. If you guess all the letters in the word before reaching 6 incorrect guesses, you win!
7. You can restart the game at any time to play again.

## Installation

To run the Hangman Game locally, follow these steps:

1. **Clone the repository**:
   git clone https://github.com/01Newbie/Hangman-Game.git

2. **Navigate into the project directory:**
   cd Hangman-Game

3. **Install dependencies:**
   npm install

4. **To start the game, run:**
   npm start

5. **Open your browser and navigate to:**
   http://localhost:3000

## Features

- **Random word selection**: The game randomly selects a word for the player to guess.
- **User-friendly interface**: Styled components make the game visually appealing and easy to navigate.
- **Help button**: Users can access game rules and instructions at any time.
- **Ability to restart the game**: Players can easily start a new game whenever they want.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used for game logic.
- **CSS**: For styling the components and overall layout.

## Contributing

Feel free to submit a pull request if you want to contribute to this project! Please ensure to follow the project's coding standards and guidelines.

## License

This project is licensed under the **MIT License**.