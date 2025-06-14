import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//incomplete project
function App() {
  let imgref=useRef(null);
  function scrollcow(){
    // imgref.current.scrollBy({right:100,behavior: "smooth"})
    Array.from(imgref.current.querySelectorAll).map((img)=>{
      img.scrollIntoView({
  behavior: 'smooth',      // or 'auto'
  block: 'start',          // 'start', 'center', 'end', 'nearest'
  inline: 'nearest'        // for horizontal scrolling
});
    })
}
  return (
    <div>
   <div className='namelist'>
    <button>cat</button>
    <button onClick={scrollcow}>cow</button>
    <button>sparrow</button>
   </div>

    <div ref={imgref} className='imglist'>
      <img src='https://media.istockphoto.com/id/508030340/photo/sunny-cat.jpg?s=612x612&w=0&k=20&c=qkz-Mf32sbJnefRxpB7Fwpcxbp1fozYtJxbQoKvSeGM='/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uLXATyFuovuGrNlDAJ_yvzyt8moC8jMQzw&s' />
    <img src='https://abcbirds.org/wp-content/uploads/2024/04/BOTW-featured-image_Field-Sparrow.jpg'/>
    </div>
    </div>
  )
}

export default App
