import PropTypes from 'prop-types';
import '../assets/styles/Message.css'

function Message({ message }) {
  return (
    <div className="message">{message}</div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message