import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeHeader from './companents/HomeHeader'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      <div className="container">
        <Routes>

        </Routes>
      </div>
    </div>
  )
}

export default App
