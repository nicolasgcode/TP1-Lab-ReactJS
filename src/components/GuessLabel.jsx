import '../assets/styles/Label.css';

import PropTypes from 'prop-types';
function GuessLabel({ value, onChange }) {
  return (
    <div className="label-container">
      <input
        type="number"
        placeholder="Enter a number between 1 and 20"
        className="guess-label"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

GuessLabel.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GuessLabel;
