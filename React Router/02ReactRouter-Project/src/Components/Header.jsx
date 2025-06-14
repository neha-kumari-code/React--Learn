import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='maindiv'>
        <div>
        <h2>Your Logo</h2>
        </div>
        <div  className='navlink'>
        <ul>
            <li>
                <NavLink to='/' className={({isActive})=>isActive?"active-link":"notActiveLink"}>Home</NavLink>
            </li>
             <li>
                <NavLink to='/About' className={({isActive})=>isActive?"active-link":"notActiveLink"}>About</NavLink>
            </li>
             <li>
                <NavLink to='/Contact' className={({isActive})=>isActive?"active-link":"notActiveLink"}>Contact</NavLink>
            </li>
             <li>
                <NavLink to='/GitHub' className={({isActive})=>isActive?"active-link":"notActiveLink"}>GitHub</NavLink>
            </li>
        </ul>
        </div>
        <div className='lastdiv'>
        <p>Log In</p>
        <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header