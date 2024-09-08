
import PropTypes from 'prop-types';

import '../../assets/styles/Button.css'

function ButtonRestart({ onClick }) {
  return (
    <button className="btnRestart" onClick={onClick}>
      Restart Game
    </button>
  );
}

ButtonRestart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonRestart;