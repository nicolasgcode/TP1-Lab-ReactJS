import { useState, useEffect } from 'react';
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
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [showLoseScreen, setShowLoseScreen] = useState(false);
  const [progress, setProgress] = useState(100); 
  const [isGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleTry = () => {
    if (attemptsLeft <= 0) return;

    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 20) {
      alert('Please enter a number between 1 and 20.');
      return;
    }

    if (numGuess === randomNumber) {
      setMessage('Congratulations! You guessed the number!');
      setAttemptsLeft(10);
      setRandomNumber(generateRandomNumber());
      setProgress(100);
    } else {
      const newAttempts = attemptsLeft - 1;
      setAttemptsLeft(newAttempts);
      if (newAttempts === 0) {
        setShowLoseScreen(true);
        setMessage('');
      } else {
        setMessage(numGuess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.');
      }
    }

    setGuess('');
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttemptsLeft(10);
    setProgress(100); 
    setShowLoseScreen(false);
  };

  
  useEffect(() => {
    if (showLoseScreen) return; 

    const intervalId = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(intervalId);
          setShowLoseScreen(true); 
          return 0;
        }
        return prev - 10; 
      });
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [showLoseScreen]);

  return (
    <div className="game-container">
      {showLoseScreen ? (
        <LoseScreen onPlayAgain={handleRestart} />
      ) : (
        <>
          <Header />
          <AttemptsBar attemptsLeft={attemptsLeft} progress={progress} /> 
          <div className="controls">
            <ButtonRestart onClick={handleRestart} />
            <LabelTry value={guess} onChange={(e) => setGuess(e.target.value)} />
            <ButtonTry onClick={handleTry} />
          </div>
          <Message message= {message}/>
          <div>
            {isGameOver && <LoseScreen onPlayAgain = {handleRestart} />}
          </div>
        </>
      )}
    </div>
  );
}
export default Game