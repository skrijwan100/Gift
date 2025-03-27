import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
const Mainpage=()=> {
    const naviget=useNavigate()
    // useState(()=>{
    //     const chakeuser=()=>{
    //         const token=localStorage.getItem('auth-token')
    //         if(!token){
    //            return naviget("verify")

    //         }
    //     }
    //     chakeuser()
    // },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}
export default Mainpage