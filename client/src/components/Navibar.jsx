import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"

const Navibar = () => {

  const verify = useContext(AuthUser)

  Authenticate()
  const auth = verify?.user?.authenticated
  const userId = verify?.user?.userInfo



  const handleLogout = () => {
    localStorage.clear()
  }


  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" style={{ "backgroundColor": "white", height: 100 }}>
        <div style={{ display: "flex"}}>
          <a class="nav-link" href="/guides" style={{color: "white", marginLeft: 40}}><b>Discover</b></a>
          <a class="nav-link" href="/guides/new" id="newGuide" style={{color: "white"}}><b>Start a guide</b></a>
        </div>

        <div style={{ display: "flex" }}>
          <a class="navbar-brand" href="/" ><h2 style={{ "margin-right": "35px", color: "white" }}>Hands On</h2></a>
        </div>
        {auth === true ?
          (
            <div style={{ display: "flex" }}>
              <a class="nav-link" href={`/users/${userId}`} id="account" style={{color: "white"}}><b>My Account</b></a>
              <a class="nav-link" href="/" onClick={handleLogout} id="logout" style={{color: "white", marginRight: 40}}><b>Logout</b></a>
            </div>
          )
          :
          (
            <div style={{ display: "flex" }}>
              <a class="nav-link" href="/login" style={{color: "white"}}><b>Login</b></a>
              <a class="nav-link" href="/signup" style={{color: "white", marginRight: 40}}><b>Sign Up</b></a>
            </div>
          )
        }

      </nav>
    </div>
  );
}

export default Navibar

