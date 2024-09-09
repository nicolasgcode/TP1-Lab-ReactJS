import PropTypes from 'prop-types';

function colorIndicator({ percentage }) {
  const getColor = (percentage) => {
    if (percentage <= 25) return '#ff4c4c';
    if (percentage <= 50) return '#ffb74d';
    if (percentage <= 75) return '#ffa500';
    return '#2884e6';
  };

  const color = getColor(percentage);

  return color;
}

colorIndicator.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default colorIndicator;
