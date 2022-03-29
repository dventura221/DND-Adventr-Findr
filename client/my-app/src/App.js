import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Filler</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
