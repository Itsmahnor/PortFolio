import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    <div className=' text-white w-[100vw] h-[100vh]'>
      <NavBar />
      <Header />
    </div>

    </>
  )
}

export default App
