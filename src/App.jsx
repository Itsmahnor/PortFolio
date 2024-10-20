import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'

function App() {
  

  return (
    <>
    <div className=' text-white w-[100vw] h-[100vh]'>
      <NavBar />
      <Header />
      <Education />
      <Skills />
    </div>

    </>
  )
}

export default App
