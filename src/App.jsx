import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router'
import AppRoutes from './components/Approutes'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
