// import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className='bg-neutral-50'>
        <Outlet />

      </div>
    </>
  )
}

export default App
