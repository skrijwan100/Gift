import React from 'react'
import Navbar from './Navbar'
import v1 from "../assets/Vedio/v1.mp4"
import v2 from "../assets/Vedio/v2.mp4"
import v3 from "../assets/Vedio/v3.mp4"
import v4 from "../assets/Vedio/v4.mp4"
import v5 from "../assets/Vedio/v5.mp4"
import v6 from "../assets/Vedio/v6.mp4"
import v7 from "../assets/Vedio/v7.mp4"
import v8 from "../assets/Vedio/v8.mp4"
import v9 from "../assets/Vedio/v9.mp4"
import v10 from "../assets/Vedio/v10.mp4"
export default function Vedio() {
  return (
    <div>
      <Navbar />
      <div className="mianbox" style={{ margin: "20px 0px" }}>
        <div className="row1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '20px' }}>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}> <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v1} alt="" controls /> </div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v2} alt="" controls /></div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v3} alt="" controls /></div>
        </div>
        <div className="row1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '20px' }}>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}> <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v4} alt="" controls /> </div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v5} alt="" controls /></div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v6} alt="" controls /></div>
        </div>
        <div className="row1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '20px' }}>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}> <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v7} alt="" controls /> </div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v8} alt="" controls /></div>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}><video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v9} alt="" controls /></div>
        </div>
        <div className="row1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '20px',marginTop:"20px" }}>
          <div className="pic" style={{ width: "330px", height: "500px", border: "2px solid white", backdropFilter: "blur(1px)", boxShadow: "rgba(255, 255, 255, 0.49) 1px 2px 16px 4px" }}> <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={v10} alt="" controls /> </div>
        </div>
      </div>
    </div>
  )
}
