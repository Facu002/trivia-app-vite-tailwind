import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ApiCall from './ApiCall'
import Landing from './Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <Landing/>
      {/* <ApiCall/> */}
    </div>
  )
}

export default App
