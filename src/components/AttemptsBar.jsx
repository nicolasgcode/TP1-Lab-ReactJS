import PropTypes from 'prop-types';
import '../assets/styles/AttemptsBar.css';

function AttemptsBar({ attemptsLeft }) {
  const getColor = (percentage) => {
    if (percentage <= 25) return '#ff4c4c';
    if (percentage <= 50) return '#ffb74d';
    if (percentage <= 75) return '#ffa500';
    return '#2884e6';
  };

  const color = getColor(attemptsLeft);

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
