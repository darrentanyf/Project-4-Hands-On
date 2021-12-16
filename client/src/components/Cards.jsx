import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"

const Cards = () => {
    const [guides, setGuides] = useState([])
    const [browse,setBrowse] = useState(6)

    useEffect(() => {
        const fetchGuides = async () => {
            const url = "/api/guides";
            const data = await axios.get(url);
            console.log("DATA", data.data)
            console.log(data.data.length)
            setGuides(data.data)

        }
        fetchGuides()
    }, [])

    const featured = Math.floor(Math.random() * (guides?.length));
    const featured2 = Math.floor(Math.random() * (guides?.length));
    return (
        <div>
            <p style={{marginTop:50, fontSize: 40}}><b>Featured Guides</b></p>
            <div class="row" style={{marginTop:30}}>
                <div class="col" style={{display: "flex" ,justifyContent: "right", alignItem: "center"}}>
                <div class="card mb-4" style={{"max-width": "600px", "max-height": "270px", margin: 0}}>
                    <div class="row no-gutters">
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title"><b>{guides[featured]?.name}</b></h5>
                                <p class="card-text">{guides[featured]?.description.slice(0, 99) + "..."}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-5" style={{display: "flex", alignItem: "center"}}>
                            <img src={guides[featured]?.guides_img} class="card-img" alt="..." style={{height: 270, "object-fit": "cover"}}></img>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col" style={{display: "flex" ,justifyContent: "left", alignItem: "center"}}>
                <div class="card mb-4" style={{"max-width": "600px", "max-height": "270px", margin: 0}}>
                    <div class="row no-gutters">
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title"><b>{guides[featured2]?.name}</b></h5>
                                <p class="card-text">{guides[featured2]?.description.slice(0, 99) + "..."}</p>
                                <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-5" style={{display: "flex", alignItem: "center"}}>
                            <img src={guides[featured2]?.guides_img} class="card-img" alt="..." style={{height: 270, "object-fit": "cover"}}></img>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div>
            <p style={{marginTop:26, fontSize: 40}}><b>Categories</b></p>
                <Categories/>
            </div>
            <div class="row" style={{ dispaly: "flex" }}>
            <p style={{marginTop:30, fontSize: 40}}><b>Browse Guides</b></p>
                <div class="col" style={{ display: "flex", justifyContent: "center", "flex-wrap": "wrap" }}>
                    {guides?.slice(0,browse).map((guide, index) => (
                        <Card bg="light" text="dark" style={{ width: "25rem", margin: 20, "border-radius": 0 }}>
                            <Card.Img variant="top" src={guides[index]?.guides_img} height="180px" style={{ "border-radius": 0 }} />
                            <Card.Body>
                                <Card.Title>{guides[index]?.name}</Card.Title>
                                <Card.Text>
                                    {guides[index]?.description.slice(0, 99) + "..."}
                                </Card.Text>
                                <a href={`/guides/${guides[index]?.guides_id}`} id={`cardButton${index}`}><Button variant="outline-dark" style={{ "border-radius": 0 }}>Read Guide</Button></a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <a class="btn btn-primary btn-lg" onClick={()=>setBrowse(browse+6)} role="button" style={{"backgroundColor": "#154360", border: "1px solid #154360"}}>Show more</a>
            <br></br>
            <br></br>
        </div>
    );
};

export default Cards;
