import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import PortfolioPage from './pages/PortfolioPage'
import PageNotFound from './pages/404Page'

<Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/resume' element={<ResumePage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    {/* <Route path='/Portfolio/:id' element={<Item />} /> */}
    <Route path="/contact" element={<ContactPage />} />
    <Route path='*' element={<PageNotFound />} />

    </Routes>


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <p>This will show up on every page</p>
    </>
  )
}

export default App
