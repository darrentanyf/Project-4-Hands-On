import React from "react"
import Navibar from "../components/Navibar"
import Carousel from "../components/Carousel"
import Cards from "../components/Cards"
import Infobar from "../components/Infobar"
import Container from "react-bootstrap/Container"
import Categories from "../components/Categories"


const Home = () => {

    return (
        <div style={{"background-color": "#F1F1F1"}}>
            <div>
                <Navibar />
            </div >
            <div class="container">
                <div class="row">
                    <Carousel />
                </div>
                <div class="row" style={{margin:20}}>
                    <div class="col"></div>
                    <div class="col-7">
                        <h3 style={{ "margin-top": 20, "margin-bottom": 20 }}>Giving everyone the ability to be creative with their hands!</h3>
                        <p style={{margin:0}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "</p>
                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <Infobar />
                </div>
                <div class="row">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Home