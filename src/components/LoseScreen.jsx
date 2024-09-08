import ButtonPlayAgain from './buttons/ButtonPlayAgain.jsx';

import PropTypes from 'prop-types';

import '../assets/styles/LoseScreen.css';

function LoseScreen({onPlayAgain}) {
  return (
    <div className="lose-screen">
      <h1>You Lose!</h1>
      <ButtonPlayAgain onClick={onPlayAgain}/>
    </div>
  );
}

LoseScreen.propTypes = {
  onPlayAgain: PropTypes.string.isRequired,
};


export default LoseScreen;