import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section></section>
      <section id="title-screen">
        <div id="sideA">
          <div class="logo">
            <h1>NICO</h1>
            <h1>AROCA</h1>
          </div>
          <div id="flavour-text">
            <h3 class="text">
              
            </h3>
          </div>
        </div>
        <div id="sideB">
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default App
