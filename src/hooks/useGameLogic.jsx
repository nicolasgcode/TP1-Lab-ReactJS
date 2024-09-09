import { useState } from 'react';

function useGameLogic() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(100);
  const [showLoseScreen, setShowLoseScreen] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [spree, setSpree] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleGuess = () => {
    if (attemptsLeft <= 0) return;

    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 20) {
      alert('Please enter a number between 1 and 20.');
      return;
    }

    if (numGuess === randomNumber) {
      setMessage('Congratulations! You guessed the number!');
      setAttemptsLeft(100);
      setSpree(spree + 1);
      setScore(score + randomNumber);
      setRandomNumber(generateRandomNumber());
    } else {
      const newAttempts = attemptsLeft - 10;
      setAttemptsLeft(newAttempts);
      if (newAttempts === 0) {
        setShowLoseScreen(true);
        setSpree(0);
        setMessage('');
      } else {
        setMessage(
          numGuess < randomNumber
            ? 'Too low! Try again.'
            : 'Too high! Try again.'
        );
      }
    }

    setGuess('');
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setScore(0);
    setSpree(0);
    setHighScore(0);
    setAttemptsLeft(100);
    setShowLoseScreen(false);
  };

  const handlePlayAgain = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setScore(0);
    setSpree(0);
    setHighScore(score);
    setAttemptsLeft(100);
    setShowLoseScreen(false);
  };

  return {
    guess,
    setGuess,
    randomNumber,
    message,
    attemptsLeft,
    showLoseScreen,
    score,
    highscore,
    spree,
    handleGuess,
    handleRestart,
    handlePlayAgain,
  };
}

export default useGameLogic;
