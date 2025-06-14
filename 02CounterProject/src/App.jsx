import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  let [text,setText]=useState("");
  function increment(){
    if(counter==25){
      setText("don't increase value above 25");
    }else  if(counter>25){
      setCounter(25);
    }else{
      setText("");
      setCounter(counter+1);
      //  setCounter(counter+3);
      //  setCounter(counter+1);
      //  setCounter(counter+2);

    }
  }
  function decrement(){
     if(counter==0){
      setText("don't decrease value below 0");
    }else  if(counter<0){
      setCounter(0);
    }else{
      setText("");
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h2>Count Project</h2>
      <h3>count value: {counter}</h3>
      <button onClick={increment}>increase value</button>
      <br/> <br/>
      <button onClick={decrement}>decrease value</button>
      <p>{text}</p>
    </>
  )
}

export default App
