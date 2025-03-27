import { useState } from 'react'
import './App.css'
import Verifyuser from './components/Verifyuser'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Mainpage from './components/Mainpage';
import { ToastContainer } from 'react-toastify'
import { Flip } from 'react-toastify';
function App() {


  return (
    <>
      <ToastContainer transition={Flip}/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Verifyuser/>}/>
      <Route path='/mainpage' element={<Mainpage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
