
import PropTypes from 'prop-types';

import '../../assets/styles/Button.css'

function ButtonTry({ onClick }) {
  return (
    <button className="btnTry" onClick={onClick}>
      Try
    </button>
  );
}

ButtonTry.propTypes = {
  onClick: PropTypes.func.isRequired, // `onClick` debe ser una función y es obligatorio
};

export default ButtonTry;