import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [position,setposition]=useState({x:0 ,y:0})
  useEffect(() => {
    const handlemousemove=(e)=>{
      setposition({x:e.pageX,y:e.pageY})
    }
  
    window.addEventListener('mousemove',handlemousemove)
    return () => {
      window.removeEventListener('mousemove',handlemousemove)

    }
  }, [])
  
  return (
   <p
   style={{ 
  width:'50px',
  height:'50px',position:'absolute', left:(position.x-25+'px'), top:(position.y-25+'px')}}
   ></p>
  )
}

export default App
