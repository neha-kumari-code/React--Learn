import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
                        <li>
                <Link to='/About'>About</Link>
            </li>
                        <li>
                <Link to='/Dashboard'>Dashboard Page</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar