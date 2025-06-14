import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
    const data=useLoaderData();
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((res)=>res.json())
    //     .then((res)=>setdata(res))
    // },[])
    
  return (
    <>
    <div>title:{data.title}</div>
    </>
  )
}

export default GitHub

// export const GitHubInfo=async ()=>{
//  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    return response.json()
    
// }