import '../assets/styles/Label.css'

import PropTypes from 'prop-types';
function LabelTry({ value, onChange }) {
  return (
    <div className="label-container">
      <input
        type="number"
        placeholder="Enter a number between 1 and 20"
        className="label-try"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

LabelTry.propTypes = {
  value: PropTypes.string.isRequired, // `value` debe ser una cadena y es obligatorio
  onChange: PropTypes.func.isRequired, // `onChange` debe ser una función y es obligatorio
};

export default LabelTry