import { useState } from 'react'
import './App.css'
import Sections from './components/Sections'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      {/* <Sections /> */}
    </>
  )
}

export default App
