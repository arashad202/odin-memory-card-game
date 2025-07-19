import Scoreboard from "./components/Scoreboard";
// import { useState } from "react"

function App() {
  let currentScore;
  let bestScore;
  let cards;
  let handleCardClick;


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-800 p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <CardGrid cards={cards} onCardClick={handleCardClick}/>
    </div>
  )
}

export default App
