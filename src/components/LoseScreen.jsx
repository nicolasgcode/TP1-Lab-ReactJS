import PlayAgainButton from './buttons/PlayAgainButton.jsx';

import PropTypes from 'prop-types';

import '../assets/styles/LoseScreen.css';

function LoseScreen({ onPlayAgain }) {
  return (
    <div className="lose-screen">
      <h1>You Lose!</h1>
      <PlayAgainButton onClick={onPlayAgain} />
    </div>
  );
}

LoseScreen.propTypes = {
  onPlayAgain: PropTypes.func.isRequired,
};

export default LoseScreen;
