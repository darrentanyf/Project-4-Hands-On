import React, { useContext, useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navibar from "./Navibar"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

const Account = () => {
    const verify = useContext(AuthUser)
    const navigate = useNavigate()
    const { id } = useParams()
    const [guides, setGuides] = useState()
    const [reviews, setReviews] = useState()
    const [user, setUser] = useState()

    Authenticate()
    const auth = verify?.user?.authenticated
    const userId = verify?.user?.userInfo

    console.log("CONTEXT 2", verify)
    console.log("CONTEXT 3", auth)

    if (auth === false) {
        console.log("IM NOT LOGGED IN")
        navigate('/login')
    }
    else {
        console.log("IM LOGGED IN")

    }

    useEffect(() => {
        const fetchDetails = async (id) => {
            console.log("Is this useEffect Working")
            const Url = `/api/users/${id}`;
            const data = await axios.get(Url);
            console.log("My Guides and Personal Info", data)

            const guideData = data?.data?.guideData
            const reviewData = data?.data?.reviewData
            const userData = data?.data?.userData
            setGuides(guideData)
            setReviews(reviewData)
            setUser(userData)
        }
        fetchDetails(id);
    }, [])

    return (
        <div>
            <Navibar />
            <Container class="navbar navbar-light bg-light justify-content-between">
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    
                    <Image src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" style={{width: 270, height:250, "border-radius":"50%"}}/>
                </Row>
                <Row style={{margin:20}}>
                    <h4>Welcome back {user?.username}!</h4>
                </Row>
            </Container>
            <Container class="bg-light justify-content-center" style={{marginTop:20}}>
                <Row style={{ diplay:"flex"}}>
                <h5>Your Guides</h5>
                <br></br>
                { guides?.map((ele,index)=>(
                    <Col>
                <Card style={{ width: '18rem', margin:20}}>
                    <Card.Img variant="top" src={guides[index]?.guides_img} style={{ height:200,}}/>
                    <Card.Body style={{height: 150}}>
                        <Card.Title>{guides[index]?.name}</Card.Title>
                        <Card.Text>
                        {guides[index]?.description.slice(0,99)+"..."}
                        </Card.Text>
                    </Card.Body>.
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>Difficulty</b> {guides[index]?.difficulty}/5 </ListGroup.Item>
                        <ListGroup.Item><b>Time Taken</b> {guides[index]?.time_taken} Hours</ListGroup.Item>
                        <ListGroup.Item style={{height:85}}><b>Tools Required</b><br></br>{guides[index]?.tools_required}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href={`/users/${guides[index]?.guides_id}`}><Button variant="outline-primary">Go To Guide</Button></Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                ))}
                </Row>
            </Container>
            <Container>

            </Container>
        </div>
    )
}

export default Account