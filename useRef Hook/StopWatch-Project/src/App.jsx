import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [time,settime]=useState(0);
  const [now,setnow]=useState(0);
  let timetillnow=useRef(0);
 
 function starttime(){
  settime(Date.now());
  setnow(Date.now());
  timetillnow.current=setInterval(()=>{
    
    setnow(Date.now());
  },1000)
 }
 let seconds=(Math.floor((now-time)/1000));
 let min=((Math.floor(seconds/60)));
 
 let hour=Math.floor(min/60);
 function stoptime(){
  clearInterval(timetillnow.current);
 }
 function resettime(){
  setnow(Date.now());
  settime(Date.now());
    clearInterval(timetillnow.current);

 }
  return (
   <>
   <h2>Time Passed: {String(hour).padStart(2,'0')}:{String(min%60).padStart(2,'0')}:{String(seconds%60).padStart(2,'0')}</h2>
   <button onClick={starttime}>start </button>
   <button onClick={stoptime} >stop</button>
   <button onClick={resettime}>reset</button>
   </>
  )
}

export default App
