import React from 'react';
import Hangman from './components/Hangman';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional, if using React-Bootstrap
import './styles/App.css'; // Import your custom styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman Game</h1>
      </header>
      <main>
        <Hangman />
      </main>
    </div>
  );
}

export default App;
