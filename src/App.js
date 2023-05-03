import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { Heap } from './features/Heap/Heap'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Heap />} />
        <Route path="heap" element={<Heap />} />
      </Routes>
    </Router>
  )
}

export default App
