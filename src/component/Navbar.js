import './Navbar.css'
import React from "react";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            width="50"
            height="50"
            className="mr-3 avatar"
            alt="profile"
            style={{marginLeft : "20px"}}
        />
        <h3 style={{ color : "white", marginLeft : "15px"}}>Username</h3>

        <a className="ml-auto d-flex align-items-center" href='#' style={{marginLeft : "65%"}}>Search for other users</a>
    </nav>
)

export default Navbar