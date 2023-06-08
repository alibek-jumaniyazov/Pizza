import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeHeader from './companents/HomeHeader'
import Home from './pages/Home'
import Footer from './companents/Footer'
import Pizza from './pages/Pizza'
import BoxInfo from './companents/BoxInfo'

function App() {



  return (
    <div className="App">
      <HomeHeader />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
