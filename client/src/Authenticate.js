import { useState, useEffect, useContext } from 'react'
import axios from "axios"
import AuthUser from "./AuthUser"

export const Authenticate = () => {
const verify = useContext(AuthUser)
const [user, setUser] = useState(null)

useEffect(() => {
    axios
      .post("/api/users/authenticate", {
          token: localStorage.getItem("token")
      })
      .then((res) => {
          console.log("RESPONSE",res)
          setUser({
            authenticated: res.data.authenticated,
            userInfo: res.data.userInfo
          })   
      });
  }, []);

verify.setUser(user)

}