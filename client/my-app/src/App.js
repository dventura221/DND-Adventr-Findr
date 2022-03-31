import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewParty from './pages/ViewParty'

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Header Placer</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="parties/:id" element={<ViewParty />} /> */}
        </Routes>
      </main>
    </div>
  )
}
