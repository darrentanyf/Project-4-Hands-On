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
import Button from "react-bootstrap/Button";


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
        <>
            <div style={{ "background-color": "white" }}>
                <div>
                    <Navibar />
                </div>
                <div class="container">
                    <div class="row" style={{ padding: "2em" }}>
                        <h2><b>{guide?.name}</b></h2>
                        <p>Written by this User</p>
                    </div>
                    <div class="row" >
                        <div class="col" style={{ padding: 0 }}>
                            <img src={guide?.guides_img} alt="" style={{ height: 400, margin: 0, border: "1px solid #D8DADB", display: "flex", alignItems: "center", justifyContent: "left", borderRadius: 5 }} />
                        </div>
                        <div class="col" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>


                            <div class="row" style={{ border: "1px solid #D8DADB", height: "3em", borderRadius: 5 }}>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <p style={{ margin: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16" style={{ height: "1.5em", margin: "0 15" }}>
                                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                        </svg>
                                        <b>Difficulty</b></p>
                                </div>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginRight: 15 }}>
                                    {guide?.difficulty < 3 ?
                                        <p style={{ margin: 0, color: "#49CA30" }}><b>Easy</b></p>
                                        : 2 < guide?.difficulty < 5 ?
                                            <p style={{ margin: 0, color: "#FFD21A" }}><b>Medium</b></p>
                                            :
                                            <p style={{ margin: 0, color: "#C70039" }}><b>Hard</b></p>
                                    }

                                </div>
                            </div>


                            <div class="row" style={{ border: "1px solid #D8DADB", height: "3em", borderRadius: 5 }}>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <p style={{ margin: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16" style={{ height: "1.5em", margin: "0 15" }}>
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <b>Time Taken </b> </p>
                                </div>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginRight: 15 }}>
                                    <p style={{ margin: 0 }}><b>{guide?.time_taken > 1 ? guide?.time_taken + " Hours" : guide?.time_taken + " Hour"} </b></p>
                                </div>
                            </div>


                            <div class="row" style={{ border: "1px solid #D8DADB", height: "3em", borderRadius: 5 }}>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <p style={{ margin: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16" style={{ height: "1.5em", margin: "0 15" }}>
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <b>Steps</b></p>
                                </div>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginRight: 15 }}>
                                    <p style={{ margin: 0 }}><b> {steps?.length}</b></p>
                                </div>
                            </div>


                            <div class="row" style={{ border: "1px solid #D8DADB", height: "3em", borderRadius: 5 }}>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <p style={{ margin: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16" style={{ height: "1.5em", margin: "0 15" }}>
                                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                        </svg>
                                        <b>Rating</b></p>
                                </div>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginRight: 15 }}>
                                    <p style={{ margin: 0 }}><b> {steps?.length}</b></p>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <div class="row" style={{ border: "1px solid #D8DADB", height: "3em", borderRadius: 5 }}>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <p style={{ margin: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16" style={{ height: "1.5em", margin: "0 15" }}>
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                        </svg>
                                        <b>Success</b></p>
                                </div>
                                <div class="col" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginRight: 15 }}>
                                    <p style={{ margin: 0 }}><b> 10 </b></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {steps ? steps.map((steps) => (
                        <div class="container" >
                            <div class="row" style={{marginTop: 40, display: "flex", justifyContent: "left" }}>
                                <h3 style={{display: "flex"}}><b>Step {steps?.step}: </b>{steps?.title}</h3>
                            </div>
                            <div class="row" style={{marginTop:20}}>
                                <div class="col" lg="5" style={{display: "flex", justifyContent: "left" }}>
                                    <Image src={steps?.steps_img} alt="" class="img-fluid"style={{ width: 700, height: 400, "border-radius": 1, border: "1px solid #D8DADB" }} />
                                </div>
                                <div class="col" lg="6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 5 }}>
                                    <ul>
                                        <li>{steps?.description}</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )) : console.log("MISSING")}
                    <h5>Reviews and Feedback</h5>
                    {reviews.map((ele, index) => (

                        <Container sm style={{ border: "1px solid lightgrey", width: 500, "box-shadow": "lightgrey 0px 5px 15px" }}>
                            <br></br>
                            <h6>Review {index + 1}</h6>
                            <Row className="g-2" style={{ display: "flex", justifyContent: "center" }}>
                                <Col sm></Col>
                                <Col sm >
                                    {reviews[index].rating}/5 <br></br> <h5>Rating</h5>
                                </Col>
                                <Col sm>
                                    {reviews[index].clarity}/5 <br></br> <h5>Clarity</h5>
                                </Col>
                                {reviews[index].success === true ?
                                    <Col sm> It was a <br></br><h5>Success</h5> </Col> : <Col md> Did Not <br></br><h5>Succeed </h5></Col>
                                }
                                <Col sm></Col>
                            </Row>
                            <Row style={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
                                <Col style={{ "box-sizing": "content-box", width: 500, paddingLeft: 80, paddingRight: 80 }}>
                                    <b>Comments & Feedback</b>
                                    <br></br>
                                    {reviews[index].comment}
                                </Col>
                            </Row >
                            <Row style={{ display: "flex", justifyContent: "center", marginTop: 5, paddingBottom: 30 }}>
                                <Col style={{ "box-sizing": "content-box", width: 500, paddingLeft: 80, paddingRight: 80, }}>
                                    <b>Difficulties Faced</b>
                                    <br></br>
                                    {reviews[index].difficulties}
                                </Col>
                            </Row>
                        </Container>

                    ))}
                    <Container>
                        <br></br>
                        {auth === false ? (<h5 style={{ margin: 20 }} id='feedbackTitle'>Need to be logged in to give feedback</h5>)
                            : userId === guide?.users_id ? (<Button variant="outline-secondary" style={{ margin: 20 }} id="reviewButton">Click here if you want to make changes to your guide</Button>)
                                :
                                (<Container><br></br>
                                    <h6>Your Review</h6><br></br>
                                    <RatingFeedback user={userId} guide={id} /></Container>)}
                        <br></br>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Guides