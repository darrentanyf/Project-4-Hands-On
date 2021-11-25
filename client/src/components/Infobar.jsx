import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from "axios"

const Infobar = () => {
    const [stepsCount, setStepsCount] = useState([])
    const [guidesCount, setGuidesCount] = useState([])
    const [successCount, setSuccessCount] = useState([])

    useEffect(() => {
        const fetchDetails = async () => {
            const Url = "/api/reviews/info";
            const data = await axios.get(Url);
            setStepsCount(data.data.stepsNo)
            setGuidesCount(data.data.guidesNo)
            setSuccessCount(data.data.successNo)
        }
        fetchDetails();
    }, [])


    return (
        <Container>
            <Row style={{ border: "1px solid ", padding: 20, margin: 25, "box-shadow": "1px 2px lightgrey", "border-radius": 5 }}>
                <Col><b>{guidesCount}</b><br></br><b>Guides Created</b></Col>
                <Col><b>{stepsCount}</b><br></br><b>Steps</b></Col>
                <Col><b>{successCount}</b><br></br><b>Success</b></Col>
            </Row>
        </Container>
    )
}

export default Infobar