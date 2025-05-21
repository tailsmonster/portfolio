// import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='bg-neutral-50'>
        <Outlet />

      </div>
    </>
  )
}

export default App
