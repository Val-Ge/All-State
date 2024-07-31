import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperGame from './ScoreKeeperGame'

function App() {
  return <ScoreKeeperGame numPlayers={4} target={3}/>
    
}

export default App
