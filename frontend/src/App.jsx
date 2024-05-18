import { useState } from 'react'
import './App.css'
import { RegisterUser } from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterUser />
    </>
  )
}

export default App
