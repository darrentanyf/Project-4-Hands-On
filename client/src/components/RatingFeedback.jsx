import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"


const RatingFeedback = (props) => {
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.currentTarget)
        console.log(event.currentTarget.rating.value)
        console.log(event.currentTarget.clarity.value)
        console.log(event.currentTarget.success.value)
        console.log(event.currentTarget.comment.value)
        console.log(event.currentTarget.difficulties.value)

        axios.post("/api/reviews", {
            users_id: props.user,
            guides_id: props.guide,
            rating: event.currentTarget.rating.value,
            clarity: event.currentTarget.clarity.value,
            success: event.currentTarget.success.value,
            comment: event.currentTarget.comment.value,
            difficulties: event.currentTarget.difficulties.value,
        })
        .then((response) => {
            console.log(response);
            navigate('/')

        });
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row className="g-2-center" >
                        <Col md>
                            <FloatingLabel controlId="rating" label="Works with selects" >
                                <Form.Select aria-label="Floating label select example" required>

                                    <option selected disabled value="">How good was the guide?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="clarity" label="Works with selects" >
                                <Form.Select aria-label="Floating label select example" required>

                                    <option selected disabled value="">How clear was the guide?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="success" label="Works with selects">
                                <Form.Control required as="select" >

                                    <option selected disabled value="">Was it a success?</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className="g-2">
                        <Col md><FloatingLabel controlId="comment" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your feedback here"
                                style={{ height: '100px' }}
                                required
                            />
                        </FloatingLabel></Col>
                        <Col md><FloatingLabel controlId="difficulties" label="Difficulties Faced">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your feedback here"
                                style={{ height: '100px' }}
                                required
                            />
                        </FloatingLabel></Col>
                    </Row>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        </div>
    )
}

export default RatingFeedback;