import React from 'react'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'


const RatingFeedback = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.currentTarget)
        console.log(event.currentTarget.floatingSelectGrid1.value)
        console.log(event.currentTarget.floatingSelectGrid2.value)
        console.log(event.currentTarget.floatingSelectGrid3.value)
        console.log(event.currentTarget.floatingTextarea1.value)
        console.log(event.currentTarget.floatingTextarea2.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid1" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>How good will you rate this guide?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid2" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>How clear was the guide?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid3" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Was it a success?</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <br></br>
                <Row className="g-2">
                    <Col md><FloatingLabel controlId="floatingTextarea1" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave your feedback here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel></Col>
                    <Col md><FloatingLabel controlId="floatingTextarea2" label="Difficulties Faced">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave your feedback here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel></Col>
                </Row>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </div>
    )
}

export default RatingFeedback;