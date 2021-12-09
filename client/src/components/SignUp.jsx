import React from "react"
import axios from "axios"
import { useState } from "react"
import Navibar from "./Navibar"




export default function Signup() {
    const [Auth, setAuth] = useState(0)
    const [Message, setMessage] = useState(null)


    const handleSubmit = (event) => {
        event.preventDefault()


        axios
            .post("/api/users/signup", {
                username: event.currentTarget.username.value,
                email: event.currentTarget.email.value,
                password: event.currentTarget.password.value,

            })
            .then((response) => {

                console.log("Auth", response.data.authenticated)
                console.log("Message", response.data.message)

                if (response.data.authenticated) {
                    window.localStorage.setItem("token", response.data.token)
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
        <div style={{ "background-color": "#F1F1F1" }}>
            <Navibar />
            <div class="container" style={{ padding: "60px" }}>
                <div class="row" >
                    <div class="col"></div>
                    <div class="col-6" style={{ border: "1px solid #EFF1F2", width: 450, "backgroundColor": "white" }}>
                    <div class="row" style={{ margin: 25 }}><h2>Sign Up</h2></div>
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
                            <div class="form-group" style={{ "margin-bottom": 20 }}>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Email"
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
                            {/* <div class="form-group">
                        <label for="profileimg">Profile Image</label>
                        <input
                            type="text"
                            class="form-control"
                            id="profileimg"
                            placeholder="Upload Profile Image"
                        />
                    </div> */}
                            {/* <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" onChange={handlePreview}/>
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <img src={Preview} alt="..." class="img-thumbnail"/> */}
                            <div>
                            <button type="submit" id="loginSignupButton">
                                Create account
                            </button>
                            </div>
                            <br></br>
                        </form>
                            <div class="row" style={{width: "88%", margin: "0 auto"}}>
                            <p style={{"font-size": 13}}>By signing up, you agree to our Privacy Policy, Cookie Policy and Terms of Use. </p>
                        </div>
                        {Auth === 0 ? (<br></br>)
                            : Auth === true ? (
                                <div class="alert alert-success" role="alert" style={{ "border-radius": 0}}>
                                    Sign Up is successful!
                                </div>
                            )
                                : (
                                    <div class="alert alert-danger" role="alert" style={{ "border-radius": 0}}>
                                        {Message}
                                    </div>
                                )
                        }
                    </div>
                    <div class="col"></div>
                    </div>
                </div>
            </div>
            )
}