import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"

const Navibar = () => {

  const verify = useContext(AuthUser)

  Authenticate()
  const auth = verify?.user?.authenticated
  const userId = verify?.user?.userInfo
  console.log("CONTEXT 2", verify)
  

  const handleLogout = () => {
    console.log("HELLO ARE YOU WORKING")
    localStorage.clear()
  }


  return (
    <div>
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <a class="nav-link" href="/guides">Discover</a>
            <a class="nav-link" href="/guides/new">Start a guide</a>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
          <a class="navbar-brand" href="/"><b>HandsOn</b></a>
          </div>

         
            { auth === true ? 
            (
              <div style={{ display: "flex", justifyContent: "right" }}>
                <a class="nav-link" href={`/users/${userId}`}>My Account</a>
              <a class="nav-link" href="/" onClick={handleLogout}>Logout</a>
              </div>

            )
            :
            (
            <div style={{ display: "flex", justifyContent: "right" }}>
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/signup">Sign Up</a>
            </div>
            )
          }

        </nav>
      </div>
    </div>
  );
}

export default Navibar

