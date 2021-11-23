import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios"
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"
import Navibar from "../components/Navibar"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"
import { useNavigate } from "react-router-dom"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

const GuidesNew = () => {

    const verify = useContext(AuthUser)
    const navigate = useNavigate()
    const [number, setNumber] = useState([1])
    const [image, setImage] = useState([])
    const [steps,setSteps] = useState([])

    Authenticate()
    const auth = verify?.user?.authenticated

    if (auth === false) {
        console.log("IM NOT LOGGED IN")
        navigate('/login')
    }
    else {
        console.log("IM LOGGED IN")

    }

    const handleIncrease = () => {
        number.push(1)
        setNumber(number)

    }

    const handleDecrease = () => {
        number.pop()
        setNumber(number)

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let stepNumber = event.currentTarget
        for(let i=1;i<(number.length+2);i++){
            let newImage = "image"+i
            let newTitle = "title"+i
            let newDescription = "description"+i
            console.log("GUIDE STEP", "STEP"+ " " +i)
            console.log("GUIDE IMAGE", stepNumber[newImage].value)
            console.log("GUIDE TITLE", stepNumber[newTitle].value)
            console.log("GUIDE DESCRIPTION", stepNumber[newDescription].value)
        }
        // console.log("IS THIS WORKING?")
        // console.log(stepNumber)
        // console.log(stepNumber.image1.value)
        // console.log(stepNumber.title1.value)
        // console.log(stepNumber.description1.value)
        // console.log(stepNumber.image2.value)
        // console.log(stepNumber.title2.value)
        // console.log(stepNumber.description2.value)
    }

    const handleImage = (event) => {
        event.preventDefault();
        console.log(event.target?.files[0])
        console.log(event.target.id)
        let preview = URL.createObjectURL(event.target?.files[0])
        image[event.target.id] = preview
        setImage(image)
        console.log("PREVIEW",image)
    }


    return (
        <Container>
            <Navibar />
            <Container mb-2>

                <Row>
                    <Form onSubmit={handleSubmit}>
                        
                        <p>Step 1</p>
                        <Row className="g-2">
                            <Col md><Form.Group controlId="image1" className="mb-3" onChange={handleImage}>
                                <Form.Label>Upload your image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                                <img src={image.image1} alt="" style={{ height: 100, width: 200}}/>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="title1" label="Title">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave your feedback here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="description1" label="Description">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave your feedback here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        { number.map((element,index)=>(
                        <Row className="g-2">
                            <p>Step {(parseInt(index)+2)}</p>
                        <Col md><Form.Group controlId={"image"+ (parseInt(index)+2)} className="mb-3" onChange={handleImage}>

                            <Form.Label>Upload your image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                            <img src={image["image"+ (parseInt(index)+2)]} alt="" style={{ height: 100, width: 200}}/>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId={"title"+ (parseInt(index)+2)} label="Title">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your feedback here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId={"description"+ (parseInt(index)+2)} label="Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your feedback here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        </Col>
                    </Row>
                ))}
                <br></br>
                <button onClick={handleIncrease} style={{ height: 50, width: 200}}>Add Steps</button>
                <button onClick={handleDecrease} style={{ height: 50, width: 200}}>Minus Steps</button>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary" style={{ height: 50, width: 200}}>
                            Submit
                        </button>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default GuidesNew