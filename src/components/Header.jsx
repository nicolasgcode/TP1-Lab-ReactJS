import PropTypes from 'prop-types';

import '../assets/styles/Header.css';

function Header({ score, highscore }) {
  return (
    <div>
      <h1 className="app-header">Guess the number!</h1>
      <div className="score-board">
        <h2>
          Score: <span>{score}</span>
        </h2>
        <h2>
          Highscore: <span>{highscore}</span>
        </h2>
      </div>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.func.isRequired,
  highscore: PropTypes.func.isRequired,
};

export default Header;
