import React,{useState, useContext} from 'react';
import {LoginContext} from "../contexts/LoginContext";

const Profile = () => {
    const {username} = useContext(LoginContext);
    return (
        <>
           <h1>Profile</h1>
           <h2>Username:{username}</h2> 
        </>
    )
}

export default Profile
