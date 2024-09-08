import '../assets/styles/Header.css'
function Header() {
  return (
    <div>
      <h1 className="app-header">Guess the number game!</h1>
      <div className="score-board">
        <h2>Score: <span>0</span></h2>
        <h2>High Score: <span>0</span></h2>
      </div>
    </div>
  )
}

export default Header