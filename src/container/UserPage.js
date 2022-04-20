import React from "react";
import UserInfo from "../component/UserInfo";
import Navbar from "../component/Navbar";

function UserPage() {
    return (
        <div className="app">
            <Navbar/>
            <UserInfo/>
        </div>
    )
}

export default UserPage;