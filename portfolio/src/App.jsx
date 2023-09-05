import { useState } from 'react'
import './App.css'
import Sections from './components/Sections'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Sections /> */}
    </>
  )
}

export default App
