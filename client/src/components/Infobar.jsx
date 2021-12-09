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
        <Container >
            <div class="row" style={{ border: "1px solid #EFF1F2", "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "margin": "0 auto", width: "84%"}}>
                
                <div class="col" style={{ padding: 20 }}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD" }}>{guidesCount}</p>
                    guides created
                </div>
                <div class="col"  style={{ padding: 20 }}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD" }}>{stepsCount}</p>
                    steps followed
                </div>
                <div class="col"  style={{ padding: 20 }}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD" }}>{successCount}</p>
                    sucess stories
                </div>
            </div>
        </Container>
    )
}

export default Infobar