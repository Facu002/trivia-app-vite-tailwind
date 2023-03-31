import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayingInterface from './PlayingInterface'
import GameContextProvider from './context/Context'
function App() {
  const [count, setCount] = useState(0)
  {
  /* <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  </div> */
  }

  return (
    <GameContextProvider>

    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/game" element={<PlayingInterface/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    </GameContextProvider>
  )
}

export default App
