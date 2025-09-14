import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePAge from './Components/HomePAge'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePAge />} />
      </Routes>
    </Router>
  )
}

export default App