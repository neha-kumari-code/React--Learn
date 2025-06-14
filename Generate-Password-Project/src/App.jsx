import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number,setnumber]=useState(false);
  const [char,setchar]=useState(false);
  const [length,setlength]=useState(8);
  const [password,setpassword]=useState("");
  const inputref=useRef();
  function handleNumber(){
    setnumber(!number);
  }
    function handleChar(){
    setchar(!char);
  }
  function handlelen(e){
    setlength(e.target.value);
  }
  function copyPass(){
    inputref.current.select();
    //to copy only some part of password:-use setselectionrange(startindex,lastindex);
    inputref.current.setSelectionRange(0,101);//(startindex.endindex)
    navigator.clipboard.writeText(inputref.current.value);//puri pass select ho rhi even though (0,5) bhejo tv v
  }
  
  let pass="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(number) {
    pass+="0123456789";
  }
  if(char){
    pass+="!@#$%^&*(){[\?><}]|+_-/";
  }
  let Genpass="";
  useEffect(()=>{
    for(let i=0;i<length;i++){
      let ch=pass[(Math.floor(Math.random()*(pass.length)))];
      Genpass+=ch;
    }
    setpassword(Genpass);
  },[length,number,char])
  return (
    <div>
      <h2>Password Generator</h2>
      <div className='textdiv'>
        <input className='textinput' ref={inputref}  type="text" value={password} />
        <button className='copyBtn' onClick={copyPass}>copy</button>
      </div>

      <div>
        <label>
        <input type="range" min={8} max={100} onChange={handlelen} />
        length({length})
        </label>
        
        <label>
          <input className='checkbox' type="checkbox" onClick={handleNumber} />
        Number
        </label>
       <label>
          <input className='checkbox' type="checkbox" onClick={handleChar} />
        Character
        </label>

      </div>
    </div>
  )
}

export default App
