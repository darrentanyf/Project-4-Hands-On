import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Cards = () => {
    console.log("TESTIN")
    
    useEffect(()=>{
        const fetchGuides = async () => {
            const url = "/api/guides";
            const data = await axios.get(url);
            console.log("DATA",data)
        }
        fetchGuides()
    },)

    return (
        <div>
            <Row>

                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: "17rem" }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" height="180px"/>
                        <Card.Body>
                            <Card.Title>Guide 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: "17rem" }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" height="180px"/>
                        <Card.Body>
                            <Card.Title>Guide 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card style={{ width: "17rem" }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" height="180px"/>
                    <Card.Body>
                        <Card.Title>Guide 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: "17rem" }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" height="180px"/>
                        <Card.Body>
                            <Card.Title>Guide 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Cards;
