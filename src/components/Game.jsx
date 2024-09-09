import Header from './Header.jsx';
import RestartButton from './buttons/RestartButton.jsx';
import GuessButton from './buttons/GuessButton.jsx';
import GuessLabel from './GuessLabel.jsx';
import HintMessage from './HintMessage.jsx';
import AttemptsBar from './AttemptsBar.jsx';
import LoseScreen from './LoseScreen.jsx';
import useGameLogic from '../hooks/useGameLogic.jsx';
import '../assets/styles/Game.css';

function Game() {
  const {
    guess,
    setGuess,
    message,
    attemptsLeft,
    showLoseScreen,
    score,
    highscore,
    handleGuess,
    handleRestart,
    handlePlayAgain,
  } = useGameLogic();

  return (
    <div className="game-container">
      {showLoseScreen ? (
        <LoseScreen onPlayAgain={handlePlayAgain} />
      ) : (
        <>
          <Header score={score} highscore={highscore} />
          <AttemptsBar attemptsLeft={attemptsLeft} />
          <HintMessage message={message} />
          <GuessLabel
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <div className="controls">
            <GuessButton onClick={handleGuess} />
            <RestartButton onClick={handleRestart} />
          </div>
        </>
      )}
    </div>
  );
}
export default Game;
