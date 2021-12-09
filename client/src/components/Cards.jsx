import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

    console.log("GUIDES", guides)

    return (
        <div>
            <div class="row" style={{ dispaly: "flex" }}>
                <div class="col" style={{ display: "flex", justifyContent: "center", "flex-wrap": "wrap" }}>
                    {guides?.map((guide, index) => (
                        <Card bg="light" text="dark" style={{ width: 338, "margin": 20, "border-radius": 0 }}>
                            <Card.Img variant="top" src={guides[index]?.guides_img} height="180px" style={{"border-radius": 0}} />
                            <Card.Body>
                                <Card.Title>{guides[index]?.name}</Card.Title>
                                <Card.Text>
                                    {guides[index]?.description.slice(0, 99) + "..."}
                                </Card.Text>
                                <a href={`/guides/${guides[index]?.guides_id}`} id={`cardButton${index}`}><Button variant="outline-dark" style={{"border-radius": 0}}>Read Guide</Button></a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <nav aria-label="Page navigation example">
                    {/* <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul> */}
                </nav>
            </div>
            <br></br>
        </div>
    );
};

export default Cards;
