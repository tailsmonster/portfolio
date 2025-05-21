// import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div>
        <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default App
