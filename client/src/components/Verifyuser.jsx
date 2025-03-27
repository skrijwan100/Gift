import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { handleError,handleSuccess } from './Alert'
export default function Verifyuser() {
    const[userauth,setuserAuth]=useState({username:"",password:""})
    const naviget=useNavigate()
    const onchange=(e)=>{
   setuserAuth({...userauth,[e.target.name]:e.target.value})
    }
   const handleuserauth=(e)=>{
    e.preventDefault();

    if(userauth.username===`${import.meta.env.VITE_USER_NAME}` && userauth.password===`${import.meta.env.VITE_PASSWORD}`){
        handleSuccess('Welcome Rani.')
        localStorage.setItem('auth-token',`${import.meta.env.VITE_TOKEN}`)
        return naviget('/mainpage')
    }
    handleError('This website not for everyone.')
   }
  return (
    <>
     <div className="outmainbox">
        <form className="formbox" onSubmit={handleuserauth}>
          <div className="mainbox">
            <h1 className="box1">login Form</h1>
            <div className="main">
              <input name='username' onChange={onchange} value={userauth.username} className="stag" type="text" placeholder="username" required />
              <input name='password' onChange={onchange} value={userauth.password} className="stag" type="password" placeholder="password" required />
              <button type='submit' className="logbtn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
