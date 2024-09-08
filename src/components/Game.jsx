import { useState } from 'react';
import Header from "./Header.jsx"
import ButtonRestart from "./buttons/ButtonRestart.jsx"
import ButtonGuess from "./buttons/ButtonGuess.jsx"
import LabelGuess from "./LabelGuess.jsx"
import Message from './HintMessage.jsx';
import AttemptsBar from './AttemptsBar.jsx';
import LoseScreen from './LoseScreen.jsx';
import '../assets/styles/Game.css'

function Game() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(100);
  const [showLoseScreen, setShowLoseScreen] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

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
      setAttemptsLeft(100);
      setScore(score + randomNumber);
      setRandomNumber(generateRandomNumber());
    } else {
      const newAttempts = attemptsLeft - 10;
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
    setScore(0);
    setHighScore(0);
    setAttemptsLeft(100);
    setShowLoseScreen(false);
  };
  
   const handlePlayAgain = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setScore(0);
    setHighScore(score);
    setAttemptsLeft(100);
    setShowLoseScreen(false);
  };
  
  // useEffect(() => {
  //   if (showLoseScreen) return; 

  //   const intervalId = setInterval(() => {
  //     setProgress(prev => {
  //       if (prev <= 0) {
  //         clearInterval(intervalId);
  //         setShowLoseScreen(true); 
  //         return 0;
  //       }
  //       return prev - 10; 
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId); 
  // }, [showLoseScreen]);

  return (
    <div className="game-container">
      {showLoseScreen ? (
        <LoseScreen onPlayAgain={handlePlayAgain} />
      ) : (
        <>
          <Header score = {score} highscore = {highscore}/>
          <AttemptsBar attemptsLeft={attemptsLeft}/> 
          <div className="controls">
            <Message message= {message}/>
            <LabelGuess value={guess} onChange={(e) => setGuess(e.target.value)} />
            <ButtonGuess onClick={handleTry} />
            <ButtonRestart onClick={handleRestart} />
          </div>
        </>
      )}
    </div>
  );
}
export default Game