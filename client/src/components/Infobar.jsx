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
        <div class="container-fluid">
            <div class="row" style={{ border: "1px solid #D8DADB", "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", marginTop: 50}}>
                <div class="col" style={{ padding: 20, borderRight: "1px solid #D8DADB", margin: 20}}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD"}}>{guidesCount}</p>
                    <b>Guides Created</b>
                </div>
                <div class="col"  style={{ padding: 20, borderRight: "1px solid #D8DADB", margin: 20  }}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD" }}>{stepsCount}</p>
                    <b>Steps Followed</b>
                </div>
                <div class="col"  style={{ padding: 20, margin: 20}}>
                    <p style={{ "font-size": 30, "font-weight": "bold", margin: 0, color: "#2C79AD" }}>{successCount}</p>
                    <b>Success Stories</b>
                </div>
            </div>
        </div>
    )
}

export default Infobar