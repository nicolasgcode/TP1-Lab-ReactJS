import { useState } from 'react';
import Header from "./Header.jsx"
import ButtonRestart from "./buttons/ButtonRestart.jsx"
import ButtonTry from "./buttons/ButtonTry.jsx"
import LabelTry from "./LabelTry.jsx"
import Message from './Message.jsx';
import AttemptsBar from './AttemptsBar.jsx';
import LoseScreen from './LoseScreen.jsx';
import '../assets/styles/Game.css'

function Game() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(10); // Número inicial de intentos
  const [showLoseScreen, setShowLoseScreen] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleTry = () => {
    if (attemptsLeft <= 0) return; // No hacer nada si ya no hay intentos

    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 20) {
      alert('Please enter a number between 1 and 20.');
      return;
    }

    if (numGuess === randomNumber) {
      setMessage('Congratulations! You guessed the number!');
      setAttemptsLeft(10); // Reinicia los intentos si acierta
      setRandomNumber(generateRandomNumber()); // Genera un nuevo número
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      if (attemptsLeft - 1 === 0) {
        setShowLoseScreen(true);
        setMessage('');
      } else {
        setMessage(numGuess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.');
      }
    }

    setGuess(''); // Limpia el campo de entrada
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttemptsLeft(10);
    setShowLoseScreen(false);
  };

  return (
    <div className="game-container">
      {showLoseScreen ? (
        <LoseScreen />
      ) : (
        <>
          <Header />
          <AttemptsBar attemptsLeft={attemptsLeft} />
          <div className="controls">
            <ButtonRestart onClick={handleRestart} />
            <LabelTry value={guess} onChange={(e) => setGuess(e.target.value)} />
            <ButtonTry onClick={handleTry} />
            <Message message = {message} />
          </div>
        </>
      )}
    </div>
  );
}
export default Game