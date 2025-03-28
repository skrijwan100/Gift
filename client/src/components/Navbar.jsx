import React from 'react'
import { Link } from 'react-router'
import { useLocation } from 'react-router-dom'
export default function Navbar() {
  const location = useLocation()
  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", backgroundColor: "#040c32" }}>
        <ul style={{ color: "white", display: "flex", gap: "18px", listStyle: "none", fontSize: "20px", fontWeight: "600" }}>
          <Link to="/mainpage" style={{ textDecoration: "none", color: "white" }}><li className={`pagebtn ${location.pathname === "/mainpage" ? "page-active" : ""}`} style={{ cursor: "pointer" }}>Picture</li></Link>
          <Link to="/vedio" style={{ textDecoration: "none", color: "white" }}><li className={`pagebtn ${location.pathname === "/vedio" ? "page-active" : ""}`} style={{ cursor: "pointer" }}>Vedio</li></Link>
          <Link to="/gift&memory" style={{ textDecoration: "none", color: "white" }}><li className={`pagebtn ${location.pathname === "/gift&memory" ? "page-active" : ""}`} style={{ cursor: "pointer" }}>Gift and Memory</li></Link>
        </ul>
      </nav>
    </div>
  )
}
