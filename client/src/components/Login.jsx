import React from "react";
import axios from "axios";
import { useState } from "react"
import Navibar from "./Navibar"

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
        <div style={{"background-color": "#F1F1F1"}}>
            <Navibar />
            <div class="container" style={{ padding: "60px" }}>
                <div class="row" >
                    <div class="col"></div>
                    <div class="col-6" style={{ border: "1px solid #EFF1F2", width: 450, "backgroundColor": "white" }}>
                        <div class="row" style={{ margin: 25 }}><h2>Login</h2></div>
                        <form onSubmit={handleSubmit}>
                            <div class="row" style={{ margin: 15 }}>
                                <div class="form-group" style={{ "margin-bottom": 20 }}>
                                    <input
                                        type="username"
                                        class="form-control"
                                        id="username"
                                        placeholder="Username"
                                        style={{ "border-radius": 0, height: 47 }}
                                    />
                                </div>
                                <div class="form-group" style={{ "margin-bottom": 10 }}>
                                    <input
                                        type="password"
                                        class="form-control "
                                        id="password"
                                        placeholder="Password"
                                        style={{ "border-radius": 0, height: 47 }}
                                    />
                                </div>
                            </div>
                            <button type="submit" id="loginButton">
                                Submit
                            </button>
                            <br></br>
                        </form>
                        {Auth === 0 ? (<br></br>)
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
                        <div class="row" style={{"border-top": "1px solid #EFF1F2", "border-bottom": "1px solid #EFF1F2", margin:10, padding: 25, display: "flex", "justifyContent": "center"}}>
                            New to Hands On? <a href="/signup" style={{width: 80, height:20, textDecoration: "none"}}>Sign Up</a>
                        </div>
                        <div class="row" >
                            <p style={{"font-size": 13}}>Hands On only collects the data that is necessary to provide its services and stores it in an anonymized way.</p>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
}
