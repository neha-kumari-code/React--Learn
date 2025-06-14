import React from 'react'
import './input.css'
const InputCard = ({number,input,setinput}) => {
  return (
    <div>
        <label>{number} input:</label>
        <input type="text" 
        value={input}
        onChange={setinput}
        />
    </div>
  )
}

export default InputCard