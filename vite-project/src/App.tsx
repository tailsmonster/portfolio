import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
