import { useState } from 'react'
import './App.css'
import OOP from "./pages/OOP.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="read-the-docs">
        <OOP></OOP>
      </div>
    </>
  )
}

export default App
