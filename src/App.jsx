import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import Header from './Components/Header'
import Education from './Components/Education'

function App() {
  

  return (
    <>
    <div className=' text-white w-[100vw] h-[100vh]'>
      <NavBar />
      <Header />
      <Education />
    </div>

    </>
  )
}

export default App
