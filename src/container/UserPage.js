import React from "react";
import UserInfo from "../component/UserInfo";
import Navbar from "../component/Navbar";
import Repositories from "../component/Repositories";

function UserPage() {
    return (
        <div className="app">
            <Navbar/>
            <UserInfo/>
            <Repositories/>
        </div>
    )
}

export default UserPage;