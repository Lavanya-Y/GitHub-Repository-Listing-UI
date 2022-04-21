import React, {useEffect, useState} from "react";
import UserInfo from "../component/UserInfo";
import Navbar from "../component/Navbar";
import Repositories from "../component/Repositories";
import {getUserData, getUserRepo} from "../api/api";
import {matchPath} from "react-router-dom";
import Loading from "../component/Loading";

function UserPage({match}) {

    const [user, setUser] = useState()
    const [repos, setRepos] = useState()
    const userNameParam = match.params.userName

    useEffect(() => {
        fetchUser()
        fetchRepo()
    }, []);

    async function fetchUser() {
        const {data} = await getUserData(userNameParam)
        setUser(data)
    }

    async function fetchRepo() {
        const {data} = await getUserRepo(userNameParam)
        setRepos(data)
    }

    return (
        <>
            {user ? (
                <>
                    <Navbar user = {user} />
                    <div className="container">
                        <UserInfo user = {user} />
                        <Repositories repos = {repos} user = {user} />
                    </div>
                </>
            ) : (
                <Loading/>
            )}
        </>
    )
}

export default UserPage;