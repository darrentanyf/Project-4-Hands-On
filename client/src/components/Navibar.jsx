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
        <nav class="navbar navbar-light" style={{"backgroundColor": "white"}}>
          <div style={{ display: "flex"}}>
            <a class="nav-link" href="/guides">Discover</a>
            <a class="nav-link" href="/guides/new" id="newGuide">Start a guide</a>
          </div>

          <div style={{ display: "flex"}}>
          <a class="navbar-brand" href="/" ><h2 style={{"margin-right": "35px"}}>Hands On</h2></a>
          </div>

         
            { auth === true ? 
            (
              <div style={{ display: "flex"}}>
                <a class="nav-link" href={`/users/${userId}`} id="account">My Account</a>
              <a class="nav-link" href="/" onClick={handleLogout} id="logout">Logout</a>
              </div>

            )
            :
            (
            <div style={{ display: "flex"}}>
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/signup">Sign Up</a>
            </div>
            )
          }

        </nav>
      </div>
  );
}

export default Navibar

