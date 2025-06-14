import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'

function App() {
  const [count,setCount]=useState(0);
  function handleclick(){
    setCount(count+1);
  }
  return (
    <Counter text="click me" handleclick={handleclick}>
    <h1>Counter Project</h1>
    <div>count:{count}</div> <br/>
    </Counter>
  )
}

export default App
