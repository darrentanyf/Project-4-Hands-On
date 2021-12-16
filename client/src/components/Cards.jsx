import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Categories from "../components/Categories"

const Cards = () => {
    const [guides, setGuides] = useState([])

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
            <h2 style={{marginTop:30}}>Featured Guides</h2>
            <div class="row" style={{marginTop:15}}>
                <div class="col" style={{display: "flex" ,justifyContent: "right", alignItem: "center"}}>
                <div class="card mb-4" style={{"max-width": "600px", "max-height": "270px"}}>
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
                <div class="card mb-3" style={{"max-width": "600px", "max-height": "270px"}}>
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
            <h2 style={{marginTop:30}}>Categories</h2>
                <Categories/>
            </div>
            <div class="row" style={{ dispaly: "flex" }}>
            <h2 style={{marginTop:30}}>Browse Guides</h2>
                <div class="col" style={{ display: "flex", justifyContent: "center", "flex-wrap": "wrap" }}>
                    {guides?.map((guide, index) => (
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
            <br></br>
        </div>
    );
};

export default Cards;
