import PropTypes from 'prop-types';

import '../assets/styles/Message.css';

function HintMessage({ message }) {
  return <div className="message">{message}</div>;
}

HintMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HintMessage;
