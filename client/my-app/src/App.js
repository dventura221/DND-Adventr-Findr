import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewParty from './pages/ViewParty'
import NavBar from './components/NavBar'
import CreateParty from './components/CreateParty'
import ViewPlayer from './pages/ViewPlayer'
import CreatePlayer from './components/CreatePlayer'

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
          <Route path="/players/:id" element={<ViewPlayer />} />
          <Route path="createplayer" element={<CreatePlayer />} />
        </Routes>
      </main>
    </div>
  )
}
