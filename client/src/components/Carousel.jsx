import React, { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import axios from "axios"

const Carouselimage = () => {
    const [guides, setGuides] = useState([])

    useEffect(() => {
        const fetchGuides = async () => {
            const url = "/api/guides";
            const data = await axios.get(url);
            console.log("DATA", data.data)
            console.log(data.data.length)
            setGuides([data.data[0],data.data[1],data.data[2]])

        }
        fetchGuides()
    }, [])

    return (
        <div>
            <div class="row">
                <div class="col"></div>
                <div class="col-10">
                <Carousel >
                    { guides?.map((guid,index)=>(
                                            <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={guides[index].guides_img}
                                                alt="First slide"
                                                height="500px"
                                                
                                                
                                            />
                                            <Carousel.Caption>
                                                <h5>{guides[index].name}</h5>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                    ))}
                </Carousel>
                </div>
                <div class="col"></div>
            </div>
        </div>
    )




}

export default Carouselimage