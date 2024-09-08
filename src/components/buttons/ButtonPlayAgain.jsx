import PropTypes from 'prop-types';
function ButtonPlayAgain({ onClick }) {
  return (
    <button className="button-play-again" onClick={onClick}>
      Play Again
    </button>
  );
}
ButtonPlayAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonPlayAgain;