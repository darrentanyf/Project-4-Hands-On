import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Cards = () => {
    const [guides, setGuides] = useState([])

    useEffect(() => {
        const fetchGuides = async () => {
            const url = "/api/guides";
            const data = await axios.get(url);
            console.log("DATA", data.data)
            console.log(data.data.length)
            setGuides(data.data)

        }
        fetchGuides()
    }, [])

    console.log("GUIDES", guides)

    return (
        <div>
            <Row >
                { guides?.map((guide,index)=>(
                        <Col style={{ display: "flex", justifyContent: "center" }}>
                        <Card bg="light" text="dark"  style={{ width: "19rem", margin: 10 }}>
                            <Card.Img variant="top" src={guides[index]?.guides_img} height="180px" />
                            <Card.Body>
                                <Card.Title>{guides[index]?.name}</Card.Title>
                                <Card.Text>
                                    {guides[index]?.description.slice(0,99)+"..."}
                                </Card.Text>
                                <a href={`/guides/${guides[index]?.guides_id}`} id={`cardButton${index}`}><Button variant="outline-dark" >Check it out</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
                <br></br>
                <p style={{"border-top": "1px solid lightgrey", margin: 15}}>HandsOn Pte Ltd</p>
        </div>
    );
};

export default Cards;
