import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import img1 from "../assets/pic1.jpg"
import img2 from "../assets/pic2.jpg"
import img3 from "../assets/pic3.jpg"
import img4 from "../assets/pic4.jpg"
import img5 from "../assets/pic5.jpg"
import img6 from "../assets/pic6.jpg"
import img7 from "../assets/pic7.jpg"
import img8 from "../assets/pic8.jpg"
import img9 from "../assets/pic9.jpg"
import img10 from "../assets/pic10.jpg"
import img11 from "../assets/pic11.jpg"
import img12 from "../assets/pic12.jpg"
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
      <div className="mianbox" style={{margin:"20px 0px"}}>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px'}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img1} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img2} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img3} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img4} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img5} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img6} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img7} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img8} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img9} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img10} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img11} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"#ffffff7d 1px 2px 12px 0px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img12} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
export default Mainpage