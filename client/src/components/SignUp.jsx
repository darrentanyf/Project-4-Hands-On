import React from "react"
import axios from "axios"
import { useState } from "react"




export default function Signup() {
    const [Auth, setAuth] = useState(0)
    const [Message, setMessage] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("USERNAME", event.currentTarget.username.value);
        console.log("EMAIL", event.currentTarget.email.value);
        console.log("Password", event.currentTarget.password.value);
        console.log("profileimg", event.currentTarget.profileimg.value);
        // const data = new FormData(event.currentTarget);

        axios
        .post("/api/users/signup", {
            username: event.currentTarget.username.value,
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
            profileimg: event.currentTarget.profileimg.value,
        })
        .then((response)=> {

            console.log("Auth",response.data.authenticated)
            console.log("Message",response.data.message)

            if (response.data.authenticated) {
            window.localStorage.setItem("token",response.data.token)
            setAuth(response.data.authenticated)
            
            setTimeout(function () {
                window.location.replace("/");
            }, 1300);
        }
        else {
            setAuth(response.data.authenticated)
            setMessage(response.data.message)

        }


        })
    }

    return (
        <div> 
            <h1>Sign Up</h1>
            <div class="container col-md-4">
            <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input
                            type="username"
                            class="form-control"
                            id="username"
                            placeholder="Enter Username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control "
                            id="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="profileimg">Profile Image</label>
                        <input
                            type="text"
                            class="form-control"
                            id="profileimg"
                            placeholder="Upload Profile Image"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                    <br></br>
                </form>
                { Auth === 0 ?  (<br></br>) 
                : Auth === true ? (
                <div class="alert alert-success" role="alert">
                    Sign Up is successful!
                </div>
                )
                : (
                    <div class="alert alert-danger" role="alert">
                    {Message}
                </div>
                )
                }
                </div>
        </div>
    )
}