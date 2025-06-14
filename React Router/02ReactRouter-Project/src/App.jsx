import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import GitHub from './Components/GitHub'
import Contact from './Components/Contact'
import Paramcomp from './Components/Paramcomp'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'


// const router=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:
//       <div>
//         <Header/>
//         <Home/>
//         <Footer/>
//       </div>
//     },
//      {
//       path:'/About',
//       element:
//       <div>
//         <Header/>
//         <About/>
//         <Footer/>
//       </div>
//     },
//      {
//       path:'/Contact',
//       element:
//       <div>
//         <Header/>
//         <Contact/>
//         <Footer/>
//       </div>
//     },
//      {
//       path:'/GitHub',
//       element:
//       <div>
//         <Header/>
//         <GitHub/>
//         <Footer/>
//       </div>
//     },
//     {
//       path:'/student/:id',
//       element:
//        <div>
//         <Header/>
//         <Paramcomp/>
//         <Footer/>
//       </div>
//     }
//   ]
// )

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route
      // loader={GitHubInfo}
      loader={async ()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        return await response.json()
      }}
      path='GitHub'
       element={<GitHub/>} />

    </Route>
  )
)

function App() {

  return (
   <div>
      <RouterProvider  router={router} />
   </div>
  )
}

export default App
