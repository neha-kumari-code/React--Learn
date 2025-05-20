import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [text,settext]=useState("")
  let arr=[
    "Why do programmers always mix up Halloween and Christmas?Because Oct 31 == Dec 25.",
    "Why did the computer show up late to work? It had a hard drive.",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "What’s a programmer’s favorite hangout place? The foo bar.",
    "Why was the function feeling sad? Because it didn’t return anything.",
    "Why do programmers prefer dark mode? Because the light attracts bugs!",
    "What did the HTML tag say to the CSS? You style me up, baby!",
    "Why couldn't the computer take its hat off? Because it had a bad case of CAPS LOCK.",
    "Why did the coder get kicked out of school?Because he kept taking classes and never attended them!",
    "How do you comfort a JavaScript bug? You console it"

];
  
  function getJoke(){
    let index=Math.floor(Math.random()*10);

    settext(arr[index]);
  }
  
  return (
    <>
    <h3>hii! click and get a joke</h3>
    <button 
    onClick={getJoke}
    >click me</button>
    <p>{text} </p>
    </>
  )
}

export default App
