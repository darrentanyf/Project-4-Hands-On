import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios"
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Navibar from "../components/Navibar"


const Guides = () => {
    const { id } = useParams()
    const [guide, setGuide] = useState(null)
    const [steps, setSteps] = useState()
    console.log("ID OF GUIDE", id)

    useEffect(() => {
        const fetchGuides = async (id) => {
            const Url = `/api/guides/${id}`;
            const data = await axios.get(Url);
            console.log("GUIDE and STEPS DATA", data)
            setGuide(data.data.guideData)
            setSteps(data.data.stepData)
        }
        fetchGuides(id);
    }, [])

    console.log("SPECIFIC GUIDE DATA", guide)
    console.log("SPECIFIC STEP DATA", steps)
    console.log("SPECIFIC STEP DATA", (Array.isArray(steps)))
    return (
        <div>
            <Navibar />
            <Container>
                <Row>
                    <img src={guide?.guides_img} alt="" style={{ height: 400, margin: 20 }}fluid/>
                </Row>
            </Container>
            <Container>
            <Row style={{ border: "1px solid lightgrey", padding: 20, margin: 25 }}>
                <Col>{guide?.difficulty}/5 <br></br><h5>Difficulty Level</h5></Col>
                <Col>{guide?.time_taken} Hour <br></br><h5>Time Taken</h5></Col>
                <Col>4/5<br></br><h5>Overall Rating</h5></Col>
            </Row>
                </Container>
            {steps ? steps.map((steps) => (
                <Container class="w-75 p-3">
                    <Row style={{ margin: 20 }} >
                        <Col >
                            <img src={steps?.steps_img} alt="" style={{ height: 200, width: 200 }} />
                        </Col>
                        <Col style={{ display: "flex", justifyContent: "center" }}>
                            <Stack gap={4} style={{ margin: 20 }}>
                                <div className="bg-light border">{steps?.title}</div>
                                <div className="bg-light border">{steps?.description}</div>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            )) : console.log("MISSING")}

        </div>
    )
}

export default Guides