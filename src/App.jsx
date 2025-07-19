import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import { useEffect, useState } from "react"

const API_KEY = "NeMdd73RpQDTzlN6ehutF17btqtYrK4n"

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchGifs = async () => {
      try {

        const res = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12`
        )
        const data = await res.json();

        const formatted = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.fixed_height.url,
          title: gif.title,
        }));

        setCards(shuffleCards(formatted));

      } catch (err)  {
        console.log(err);
      }

      fetchGifs();
    }
  }, []);

  const shuffleCards = (cardsArray) => {
    return [...cardsArray].sort(() => Math.round() - 0.5);
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-800 p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <CardGrid cards={cards} onCardClick={handleCardClick}/>
    </div>
  )
}

export default App
