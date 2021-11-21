import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Infobar = () => {
    return (
        <Container>
            <Row style={{ border: "1px solid lightgrey", padding: 20, margin: 25 }}>
                <Col>25K Steps Created</Col>
                <Col>8000 Reviews</Col>
                <Col>11K Successes</Col>
            </Row>
        </Container>
    )
}

export default Infobar