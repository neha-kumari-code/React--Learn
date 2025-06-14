import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'

const router=createBrowserRouter(
  [
    {path:'/',
      element:
      <div>
        <Home/>
        <Navbar/>
      </div>
    },
    {path:'/About',
      element:
      <div>
        <About/>
        <Navbar/>
      </div>
    },
    {path:'/Dashboard',
      element:
      <div>
        <Dashboard/>
        <Navbar/>
      </div>
    },
  ]
)
function App() {
  return (
   <div>
   <RouterProvider router={router} />
   </div>
  )
}

export default App
