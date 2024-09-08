import PropTypes from 'prop-types';
import '../assets/styles/AttemptsBar.css';

function AttemptsBar({ progress }) {
  return (
    <div className="attempts-bar-container">
      <div
        className="attempts-bar"
        style={{ width: `${progress}%` }} 
      ></div>
    </div>
  );
}

AttemptsBar.propTypes = {
  attemptsLeft: PropTypes.number.isRequired, 
  progress: PropTypes.number.isRequired,
};

export default AttemptsBar;