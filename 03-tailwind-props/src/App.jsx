import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  name: "jon",
  age: "idk"
}

let newArr = [1, 2, 3, 4, 5]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="px-4 py-2 rounded-md text-gray-900 bg-violet-400 mb-4">Tailwind Test</h1>
      <Card  username = "JonSnow" btnText = "Winter is Coming" />
      <Card  username = "Danerys" btnText = "Dracarys" />
    </>
  )
}

export default App
