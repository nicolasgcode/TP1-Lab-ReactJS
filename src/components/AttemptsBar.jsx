import PropTypes from 'prop-types';
import '../assets/styles/AttemptsBar.css';

function AttemptsBar({ attemptsLeft }) {
  return (
    <div className="attempts-bar-container">
      <div
        className="attempts-bar"
        style={{ width: `${attemptsLeft}%` }} 
      ></div>
    </div>
  );
}

AttemptsBar.propTypes = {
  attemptsLeft: PropTypes.number.isRequired, 
};

export default AttemptsBar;