import PropTypes from 'prop-types';

import '../../assets/styles/Button.css';

function RestartButton({ onClick }) {
  return (
    <button className="btnRestart" onClick={onClick}>
      Restart Game
    </button>
  );
}

RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RestartButton;
