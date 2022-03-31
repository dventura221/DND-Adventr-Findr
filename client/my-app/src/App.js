import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewParty from './pages/ViewParty'
import NavBar from './components/NavBar'
import CreateParty from './components/CreateParty'

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parties/:id" element={<ViewParty />} />
          <Route path="createparty" element={<CreateParty />} />
        </Routes>
      </main>
    </div>
  )
}
