import PropTypes from 'prop-types';
import colorIndicator from '../utils/colorIndicator.jsx';
import '../assets/styles/AttemptsBar.css';

function AttemptsBar({ attemptsLeft }) {
  const color = colorIndicator({ percentage: attemptsLeft });

  return (
    <div className="attempts-bar-container">
      <div
        className="attempts-bar"
        style={{ width: `${attemptsLeft}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}

AttemptsBar.propTypes = {
  attemptsLeft: PropTypes.number.isRequired,
};

export default AttemptsBar;
