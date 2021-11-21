import React from "react"
import Navibar from "../components/Navibar"
import Carousel from "../components/Carousel"
import Cards from "../components/Cards"
import Infobar from "../components/Infobar"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const Home = () => {

    return (
        <div>
            <div>
                <Navibar />
            </div>
            <Container>
                <Carousel />
            </Container>
            <Container>
                <Infobar />
            </Container>
            <Container>
                <Cards />
            </Container>
        </div>
    )
}

export default Home