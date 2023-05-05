import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { Home } from './features/Home/Home'
import { Heap } from './features/dataStructures/Heap/Heap'
import { BinarySearch } from './features/algorithms/BinarySearch/BinarySearch'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="heap" element={<Heap />} />
        <Route path="binary-search" element={<BinarySearch />} />
      </Routes>
    </Router>
  )
}

export default App
