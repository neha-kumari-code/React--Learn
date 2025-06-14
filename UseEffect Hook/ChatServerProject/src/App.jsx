import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createConnection} from './Chat.jsx'
function Chat({selectval}){
  const [serverId,setServerId]=useState('https://www.neha');
  useEffect(() => {
    const connection=createConnection(selectval,serverId);
    connection.connect();
  
    return () => {
      connection.disconnect();
    }
  }, [serverId,selectval])
  
  return(
    <>
    Server Url:{' '}
    <input type="text" value={serverId}/>
    <h2>welcome to {selectval} chatroom</h2>
    </>
  )
}
function App() {
  
  
  const [selectval,setselectval]=useState('general')
  const [show,setshow]=useState('false')
  return (
   <>
   Choose the chat room:{' '}
   <select value={selectval} onChange={(e)=>{setselectval(e.target.value)}} >
    <option value="general">general</option>
        <option value="music">music</option>
    <option value="travel">travel</option>

   </select>
   <button onClick={()=>{setshow(!show)}}>
    {
      show?'close chat':'open chat'
    }
   </button>
   
   { (show&&<hr/>)}
   { (show&&<Chat selectval={selectval}/>)}
   
   </>
  )
}

export default App
