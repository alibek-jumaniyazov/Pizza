import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeHeader from './companents/HomeHeader'
import Home from './pages/Home'
import Footer from './companents/Footer'
import Pizza from './pages/Pizza'
import x from './images/Cross.svg'

function App() {


  const [name , setName] = useState('boxInfo')
  function close(){
    setName('none')
  }
  
  return (
    <div className="App">
      <HomeHeader />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza setName={setName}/>} />
        </Routes>
      </div>
      <Footer />
      <div  className={name}>
        <div className="productInfo">
          <p>❤️</p>
        </div>
        <img src={x} alt="" onClick={() => close()}/>
      </div>
    </div>
  )
}

export default App
