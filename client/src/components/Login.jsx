import React from "react";
import axios from "axios";
import { useState } from "react"

export default function Login() {
    const [Auth, setAuth] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("USERNAME", event.currentTarget.username.value);
        console.log("Password", event.currentTarget.password.value);


        axios
            .post("/api/users/login", {
                username: event.currentTarget.username.value,
                password: event.currentTarget.password.value,
            })
            .then((response) => {
                console.log(response.data.authenticated)
                console.log(response.data.message)
                // console.log(response.data.token)

                setAuth(response.data.authenticated)
                if (response.data.authenticated) {
                window.localStorage.setItem("token", response.data.token);
                setTimeout(function () {
                    window.location.replace("/");
                }, 1300);
                }
            });
    };

    return (
        <div>
            <h1>Login</h1>

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
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control "
                            id="password"
                            placeholder="Enter Password"
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
                    Login is successful!
                </div>
                )
                : (
                    <div class="alert alert-danger" role="alert">
                    Username or Password is invalid.
                </div>
                )
                }

            </div>
        </div>
    );
}