import React, { useContext, useState } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navibar from "./Navibar"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"
import { useNavigate } from "react-router-dom"

const Account = () => {

    const verify = useContext(AuthUser)
    const navigate = useNavigate()

    Authenticate()
    const auth = verify?.user?.authenticated
    console.log("CONTEXT 2", verify)
    console.log("CONTEXT 3", auth)

    if (auth === false) {
        console.log("IM NOT LOGGED IN")
        navigate('/login')
    }
    else {
        console.log("IM LOGGED IN")  

    }

    return (
        <div>
            <Navibar />
            <Container>
                <Row>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Account