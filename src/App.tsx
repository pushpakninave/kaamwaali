import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-col justify-evenly flex-grow">
        <div className="card mt-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App
