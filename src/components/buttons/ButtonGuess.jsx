
import PropTypes from 'prop-types';

import '../../assets/styles/Button.css'

function ButtonTry({ onClick }) {
  return (
    <button className="btnTry" onClick={onClick}>
      Guess
    </button>
  );
}

ButtonTry.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonTry;