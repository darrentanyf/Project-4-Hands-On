import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios"
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Navibar from "../components/Navibar"
import RatingFeedback from "../components/RatingFeedback"
import { Authenticate } from "../Authenticate";
import AuthUser from "../AuthUser"


const Guides = () => {
    const { id } = useParams()
    const [guide, setGuide] = useState(null)
    const [steps, setSteps] = useState(null)
    const [reviews, setReviews] = useState([])
    console.log("ID OF GUIDE", id)

    const verify = useContext(AuthUser)

    Authenticate()
    const auth = verify?.user?.authenticated
    const userId = verify?.user?.userInfo

    useEffect(() => {
        const fetchGuides = async (id) => {
            const Url = `/api/guides/${id}`;
            const data = await axios.get(Url);
            console.log("GUIDE and STEPS DATA", data)
            setGuide(data.data.guideData)
            setSteps(data.data.stepData)
            setReviews(data.data.reviewData)
        }
        fetchGuides(id);
    }, [])


    return (
        <div>
            <Navibar />
            <Container>
                <Row >
                    <img src={guide?.guides_img} alt="" style={{ height: 400, margin: 20, display: "flex", justifycontent: "center", }} fluid/>
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
                <Container >
                    <Row style={{ margin: 20, padding: 20,  border: "1px solid ", "box-shadow": "1px 2px lightgrey", "border-radius": 5 }} className="bg-light border">
                        <h5>Step {steps?.step}</h5>
                        <Col lg="5" style={{paddingBottom: 20}}>
                            <Image src={steps?.steps_img} alt="" style={{ height: 200, width: 200, "border-radius": 5, border: "3px solid darkgrey"}} />
                        </Col>
                        <Col lg="6" style={{ display: "flex", justifyContent: "center" }}>
                            <Stack gap={4} style={{ margin: 20 }}>
                                <div ><b>Title</b><br></br>{steps?.title}</div>
                                <div ><b>Description</b><br></br>{steps?.description}</div>
                            </Stack>
                        </Col>
                            
                    </Row>
                </Container>
            )) : console.log("MISSING")}
            <h5>Reviews and Feedback</h5>
            { reviews.map((ele, index)=>(

            <Container sm style={{ border: "1px solid lightgrey", width:500, "box-shadow": "lightgrey 0px 5px 15px"}}>
                <br></br>
                <h6>Review {index+1}</h6>
                <Row className="g-2" style={{ display: "flex", justifyContent: "center"}}>
                    <Col sm></Col>
                    <Col sm >
                    {reviews[index].rating}/5 <br></br> <h5>Rating</h5>
                    </Col>
                    <Col sm>
                    {reviews[index].clarity}/5 <br></br> <h5>Clarity</h5>
                    </Col>
                        { reviews[index].success === true ? 
                    <Col sm> It was a <br></br><h5>Success</h5> </Col> : <Col md> <br></br><h5>Did Not Succeed </h5></Col> 
                }
                    <Col sm></Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center",marginTop:5 }}>
                <Col style={{"box-sizing": "content-box", width:500, paddingLeft: 80, paddingRight: 80}}>
                <b>Comments & Feedback</b>
                    <br></br>
                {reviews[index].comment}
                </Col>
                </Row >
                <Row style={{ display: "flex", justifyContent: "center", marginTop:5, paddingBottom:30}}>
                <Col style={{"box-sizing": "content-box", width:500, paddingLeft: 80, paddingRight: 80, }}>
                    <b>Difficulties Faced</b>
                    <br></br>
                    {reviews[index].difficulties}
                    </Col>
                </Row>
                </Container>
                
            ))}
            <Container>
                {auth === true ? ( <Container><br></br>
                <h6>Your Review</h6><br></br>
                <RatingFeedback user={userId} guide={id}/></Container> ) : ( <p>Need to be logged in to give feedback</p>) }
                </Container>
        </div>
    )
}

export default Guides