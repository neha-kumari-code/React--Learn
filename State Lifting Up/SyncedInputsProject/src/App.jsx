import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputCard from './Components/input';

function App() {
  const [input,setInput]=useState("");
  return (
   <>
   <h2>Synced Input Project</h2>
   <InputCard number="first" input={input} setinput={(e)=>{
    setInput(e.target.value);
   }}/> <br/>
   <InputCard number="second" input={input} setinput={(e)=>{
    setInput(e.target.value);
   }}/>
   </>
  )
}

export default App
