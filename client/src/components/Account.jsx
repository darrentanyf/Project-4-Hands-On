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
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

const Account = () => {
    const verify = useContext(AuthUser)
    const navigate = useNavigate()
    const { id } = useParams()
    const [guides, setGuides] = useState()
    const [reviews, setReviews] = useState()
    const [user, setUser] = useState()
    const [image, setImage] = useState()
    const [imageLink, setImageLink] = useState()

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


    const handleImage = async (event) => {
        event.preventDefault();
        console.log("IS THIS THE BLOB?",event.target?.files[0])
        console.log(event.target.id)
        let preview = URL.createObjectURL(event.target?.files[0])
        setImage(preview)
        const res = await uploadFile(event.target?.files[0])
        console.log("RESRESRERS",res)
        setImageLink(res)
        console.log("WHAT IS THIS TIMAGE", user?.profile_img)

        console.log("BEBFORE POSTING")
        axios
            .post("/api/users/update", {
                users_id: userId,
                profile_img: res
            })
            .then ((response)=>{
                console.log("PROFILE UPDATED",response)
            })

    }

    const uploadFile = async (file) => {
        const formData = new FormData()
        console.log("IS THIS FILE A BLOB", file)
        formData.append('file', file)
        formData.append('upload_preset', process.env.CLOUDINARY_API ?? 'qncyjvkz')
    
        const res = await axios.post('https://api.cloudinary.com/v1_1/desertkrieg/image/upload', formData)
        return res.data.secure_url 
      }

    return (
        <div>
            <Navibar />
            <br></br>
            <Container class="navbar navbar-light bg-light justify-content-between">
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    { image ? 
                    (<Image src={image} style={{ width: 270, height: 250, "border-radius": "50%" }} />)
                    : user?.profile_img === null? ( <Image src="https://www.pngkey.com/png/full/107-1072091_computer-icons-user-profile-facebook-instagram-instagram-profile.png" style={{ width: 270, height: 250, "border-radius": "50%" }} /> )
                    : (<Image src={user?.profile_img} style={{ width: 270, height: 250, "border-radius": "50%" }} />)
                }
                </Row>
                <Row style={{ margin: 20 }}>
                    <h4>Welcome back {user?.username}!</h4>
                </Row>
            </Container>
            <Container class="navbar navbar-light  justify-content-center">
                <Row style={{ display: "flex" }}>
                    <Form onSubmit="{handleSubmit}" >
                        <Form.Label>Upload Your Profile Picture</Form.Label>
                        <Form.Group controlId="guideImage" className="" onChange={handleImage} style={{ display: "flex" }}>
                            <Form.Control type="file" style={{ width: 300 }}  />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
            <Container class="bg-light justify-content-center" style={{ marginTop: 20 }}>
                <Row style={{ diplay: "flex" }}>
                    <h5>Your Guides</h5>
                    <br></br>
                    {guides?.map((ele, index) => (
                        <Col>
                            <Card style={{ width: '18rem', margin: 20 }}>
                                <Card.Img variant="top" src={guides[index]?.guides_img} style={{ height: 200, }} />
                                <Card.Body style={{ height: 150 }}>
                                    <Card.Title>{guides[index]?.name}</Card.Title>
                                    <Card.Text>
                                        {guides[index]?.description.slice(0, 99) + "..."}
                                    </Card.Text>
                                </Card.Body>.
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><b>Difficulty</b> {guides[index]?.difficulty}/5 </ListGroup.Item>
                                    <ListGroup.Item><b>Time Taken</b> {guides[index]?.time_taken} Hours</ListGroup.Item>
                                    <ListGroup.Item style={{ height: 85 }}><b>Tools Required</b><br></br>{guides[index]?.tools_required}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href={`/guides/${guides[index]?.guides_id}`}><Button variant="outline-primary">Go To Guide</Button></Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
            <Container class="bg-light justify-content-center" style={{ marginTop: 20 }}>
                <Row style={{ diplay: "flex" }}>
                    <h5>Your Reviews/Feedbacks</h5>
                    <br></br>
                    {reviews?.map((ele, index) => (
                        <Card style={{ width: '16rem', margin: 10 }}>
                            <Card.Header>Title</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Rating:</b> {reviews[index]?.rating}/5</ListGroup.Item>
                                <ListGroup.Item><b>Comment:</b> {reviews[index]?.comment}</ListGroup.Item>
                                <ListGroup.Item><b>Difficulty:</b> {reviews[index]?.difficulties}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Account