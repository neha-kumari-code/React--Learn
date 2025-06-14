import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let btnref=useRef();
  function bgchange(){
    btnref.current.style.backgroundColor="red";
  }
  function reset(){
    btnref.current.style.backgroundColor=null;
  }
  return (
   <div>
    <h2>Click and change Bg</h2>
    <button ref={btnref}>button</button>
    <br/> <br/>
    <button onClick={bgchange}>click to change Bg</button>
    <button onClick={reset} style={{marginLeft:"14px"}}>reset</button>
   </div>
  )
}

export default App
