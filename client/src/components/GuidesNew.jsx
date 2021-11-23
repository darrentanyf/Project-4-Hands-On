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
    const [steps, setSteps] = useState([])

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
        for (let i = 1; i < (number.length + 2); i++) {
            let newImage = "image" + i
            let newTitle = "title" + i
            let newDescription = "description" + i
            console.log("GUIDE STEP", "STEP " + i)
            console.log("GUIDE IMAGE", stepNumber[newImage].value)
            console.log("GUIDE TITLE", stepNumber[newTitle].value)
            console.log("GUIDE DESCRIPTION", stepNumber[newDescription].value)

            steps.push({
                step: i,
                title: stepNumber[newTitle].value,
                description: stepNumber[newDescription].value,
                steps_img: stepNumber[newImage].value
            })

            setSteps(steps)
            console.log("STEPS SENT", steps)
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
        console.log("PREVIEW", image)
    }


    return (
        <Container>
            <Navibar />
            <Container mb-2>

                <Row>
                    <Form onSubmit={handleSubmit}>
                        <h4>Start your new guide </h4>
                        <Row className="g-2" style={{ margin: 20, display: "flex", justifycontent: "center" }}>
                            <Col md><Form.Group controlId="guideImage" className="" onChange={handleImage} >
                                <Image src={image.guideImage} alt="" style={{ height: 400, width: 1100, margin: 20}} />
                                {/* <Form.Label>Upload your image</Form.Label> */}
                                <Form.Control type="file" style={{ width: 300 }} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row className="g-2" style={{ margin: 20, display: "flex", justifycontent: "center" }}>
                            <Col md>
                                <FloatingLabel controlId="guideTitle" label="Guide Title">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave your feedback here"
                                        style={{ height: '100px'}}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="guideDescription" label="Guide Desription">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave your feedback here"
                                        style={{ height: '100px'}}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2" style={{ margin: 20, display: "flex", justifycontent: "center" }}>
                            <Col md>
                                <FloatingLabel controlId="guideDifficulty" label="Works with selects">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>How difficult is this guide?</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="gudeTimeTaken" label="Works with selects">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>How long did you take?</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        


                        <Row className="g-2" style={{ margin: 20, display: "flex", justifycontent: "center" }}>
                            <Col md>
                                <FloatingLabel controlId="guideToolsRequired" label="Tools Required">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave your feedback here"
                                    // style={{ height: '100px', width: '800px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="guidePartsRequired" label="Parts Required">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave your feedback here"
                                    // style={{ height: '100px', width: '800px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>



                        <h5>Step 1</h5>
                        <Row className="g-2" style={{ margin: 20 }}>
                            <Col md><Form.Group controlId="image1" className="mb-3" onChange={handleImage}>
                                <Form.Label>Upload your image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                                <Image src={image.image1} alt="" style={{ height: 110, width: 250 }} />
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
                        {number.map((element, index) => (
                            <Row className="g-2" style={{ margin: 20 }}>
                                <h5>Step {(parseInt(index) + 2)}</h5>
                                <Col md><Form.Group controlId={"image" + (parseInt(index) + 2)} className="mb-3" onChange={handleImage}>

                                    <Form.Label>Upload your image</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                    <img src={image["image" + (parseInt(index) + 2)]} alt="" style={{ height: 110, width: 250 }} />
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId={"title" + (parseInt(index) + 2)} label="Title">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave your feedback here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel controlId={"description" + (parseInt(index) + 2)} label="Description">
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
                        <Button onClick={handleIncrease} style={{ height: 50, width: 200 }} variant="outline-success">Add Steps</Button>
                        <Button onClick={handleDecrease} style={{ height: 50, width: 200 }} variant="outline-success">Minus Steps</Button>
                        <br></br>
                        <br></br>
                        <button type="submit" class="btn btn-primary" style={{ height: 50, width: 200 }}>
                            Submit
                        </button>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default GuidesNew