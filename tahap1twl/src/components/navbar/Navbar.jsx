import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="containerNav">
            <div className="navName">
                <span>Hi, My Name </span>
                <span>Lalu Firrizqi Maulana</span>
            </div>
            <div className="navMenuRight">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/worker"}>Worker</Link>
                {/* <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#">Worker</a> */}
            </div>
            <div className="navMenuBottom">
                <Link to={"/Service"}>Service</Link>
                <Link to={"/Contact"}>Contact</Link>
                {/* <a href="#">Service</a>
                <a href="#">Contact</a> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar