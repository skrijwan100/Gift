import React from 'react'
import Navbar from './Navbar'
import img1 from "../assets/memoryandgift/pic1.jpg"
export default function Vedio() {
  return (
    <div>
        <Navbar/>
       <div className="mianbox" style={{ margin: "20px 0px" }}>
                      <div className="row1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '20px' }}>
                          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}> <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={img1} alt="" /> </div>
                          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={img1} alt="" /></div>
                          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={img1} alt="" /></div>
                      </div>
                      </div>
    </div>
  )
}
