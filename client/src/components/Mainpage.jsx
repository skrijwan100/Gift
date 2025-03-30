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
import img13 from "../assets/pic13.jpg"
import img14 from "../assets/pic14.jpg"
import img15 from "../assets/pic15.jpg"
import img16 from "../assets/pic16.jpg"
import img17 from "../assets/pic17.jpg"
import img18 from "../assets/pic18.jpg"
import img19 from "../assets/pic19.jpg"
import img20 from "../assets/pic20.jpg"
import img21 from "../assets/pic21.jpg"
import img22 from "../assets/pic22.jpg"
import img24 from "../assets/pic24.jpg"
import img25 from "../assets/pic25.jpg"
import img26 from "../assets/pic26.jpg"
import img27 from "../assets/pic27.jpg"
import img28 from "../assets/pic28.jpg"
import img29 from "../assets/pic29.jpg"
import img30 from "../assets/pic30.jpg"
import img31 from "../assets/pic31.jpg"
import img32 from "../assets/pic32.jpg"
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
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img1} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img2} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img3} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img4} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img5} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img6} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img7} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img8} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img9} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img10} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img11} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img12} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img13} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img14} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img15} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img16} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img17} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img18} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img19} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img20} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img21} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img22} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img24} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img25} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img26} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img27} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img28} alt="" /></div>
        </div>
        <div className="row1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:'20px',marginTop:"20px"}}>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}> <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img29} alt="" /> </div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img30} alt="" /></div>
          <div className="pic" style={{width:"330px",height:"400px",border:"2px solid white",backdropFilter:"blur(1px)",boxShadow:"rgba(255, 255, 255, 0.49) 1px 2px 16px 4px"}}><img style={{height:"100%",width:"100%",objectFit:"cover"}} src={img31} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
export default Mainpage