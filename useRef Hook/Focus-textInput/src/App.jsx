import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let inputref=useRef(null);
  function handlefocus(){
    inputref.current.style.border="2px solid black";
    inputref.current.style.boxShadow="0 0 10px 5px rgb(48, 47, 47)";
    inputref.current.focus();
  }
  return (
   <div>
    <input ref={inputref} placeholder='enter text'/>
    <button className='focusbtn' onClick={handlefocus} style={{marginLeft:"12px"}}>focus the input</button>
   </div>
  )
}

export default App
