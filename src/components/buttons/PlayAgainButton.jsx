import PropTypes from 'prop-types';

import '../../assets/styles/Button.css';

function PlayAgainButton({ onClick }) {
  return (
    <button className="play-again-btn" onClick={onClick}>
      Play Again
    </button>
  );
}

PlayAgainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayAgainButton;
