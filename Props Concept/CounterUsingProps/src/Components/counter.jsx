import React from 'react'

const Counter = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleclick}>{props.text}</button>
    </div>
  )
}

export default Counter