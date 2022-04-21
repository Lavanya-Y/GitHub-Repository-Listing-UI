import './Navbar.css'
import React from "react";

const Navbar = ({ user }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
            src={user.avatar_url}
            width="50"
            height="50"
            className="mr-3 avatar"
            alt="profile"
            style={{marginLeft : "20px"}}
        />
        <h3 style={{ color : "white", marginLeft : "15px", fontSize : "25px"}}>{user.name}</h3>

        <a className="ml-auto d-flex align-items-center" href='/' style={{marginLeft : "65%"}}>Search for other users</a>
    </nav>
)

export default Navbar