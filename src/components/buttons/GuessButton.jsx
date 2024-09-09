import PropTypes from 'prop-types';

import '../../assets/styles/Button.css';

function GuessButton({ onClick }) {
  return (
    <button className="btnTry" onClick={onClick}>
      Guess
    </button>
  );
}

GuessButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GuessButton;
