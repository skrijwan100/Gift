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
import Giftandmemory from './components/Giftandmemory';
import Vedio from './components/Vedio';
import Loginsing from './components/Loginsing';
function App() {


  return (
    <>
      <ToastContainer transition={Flip}/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Verifyuser/>}/>
      <Route path='/mainpage' element={<Mainpage/>}/>
      <Route path='/gift&memory' element={<Giftandmemory/>}/>
      <Route path='/vedio' element={<Vedio/>}/>
      <Route path='/logsing' element={<Loginsing/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
