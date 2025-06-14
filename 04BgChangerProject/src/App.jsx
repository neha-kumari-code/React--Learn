import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [bgColor,setBgColor]=useState("black");
  // function BgRed(){
  //   setBgColor("Red");
  // }
  // function BgBlue(){
  //   setBgColor("Blue");
  // }
  // function BgGreen(){
  //   setBgColor("Green");
  // }
  // function BgYellow(){
  //   setBgColor("Yellow");
  // }
  // function BgOlive(){
  //   setBgColor("Olive");
  // }
  return (
    <>
     <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden'
    style={{backgroundColor:bgColor}}>
    <h2 className='font-bold mb-5 mt-3'>Bg-Changer Project</h2>
    <div className=' fixed flex flex-wrap justify-center button-12 inset-x-0 px-2'>
     <div className='  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}
      //  onClick={BgRed} 
      onClick={()=>setBgColor("red")}
       >Red</button>
      <button  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"blue"}}
      //  onClick={BgBlue}
      onClick={()=>setBgColor("blue")}
       >Blue</button>
      <button  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}
      //  onClick={BgGreen}
      onClick={()=>setBgColor("green")}
       >Green</button>
      <button  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"yellow"}}
      //  onClick={BgYellow}
      onClick={()=>setBgColor("yellow")}
       >Yellow</button>
      <button  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"olive"}}
      // onClick={BgOlive}
      onClick={()=>setBgColor("olive")}
      >Olive</button>

    </div>
    </div>
     </div>
    </>
  )
}

export default App
