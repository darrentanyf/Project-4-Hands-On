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
            console.log("DATA", data)
            setGuides([data.data[0],data.data[1],data.data[2]])
        }
        fetchGuides()
    }, [])

    console.log("GUIDES", guides)

    return (
        <div>
            <Row>
                { guides.map((guides,key)=>(
                        <Col style={{ display: "flex", justifyContent: "center" }}>
                        <Card style={{ width: "19rem" }}>
                            <Card.Img variant="top" src={guides.guides_img} height="180px" />
                            <Card.Body>
                                <Card.Title>{guides.name}</Card.Title>
                                <Card.Text>
                                    {guides.description.slice(0,99)+"..."}
                                </Card.Text>
                                <a href={`/guides/${guides.guides_id}`}><Button variant="primary" >Check it out</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Cards;
