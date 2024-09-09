import PropTypes from 'prop-types';

import '../../assets/styles/Button.css';

function RestartButton({ onClick }) {
  return (
    <button className="restart-btn" onClick={onClick}>
      Restart Game
    </button>
  );
}

RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RestartButton;
