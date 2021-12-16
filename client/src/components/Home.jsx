import React from "react"
import Navibar from "../components/Navibar"
import Carousel from "../components/Carousel"
import Cards from "../components/Cards"
import Infobar from "../components/Infobar"
import Container from "react-bootstrap/Container"
import Categories from "../components/Categories"
import About from "../components/About"

const Home = () => {

    return (
        <>
            <div style={{ "background-color": "#F1F1F1" }}>
                <div>
                    <Navibar />
                </div >
                <div class="jumbotron" style={{
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1618798481077-3be76e908cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: 600,
                    color: "white"
                }}>
                    <div class="container" style={{padding: '8.5em', }}>
                        <h1 class="display-4">Creativity is about having fun.<br></br>Lets bring it to life here.</h1>
                        <p><b>Hands On is a place for everyone to share their creative guides to improve and have fun.</b></p>
                        <a class="btn btn-primary btn-lg" href="www.google.com" role="button">Learn more</a>
                    </div>

                    {/* <Carousel /> */}
                </div>
                <div class="container">
                    <div class="row" style={{ margin: 20 }}>
                        <div class="col"></div>
                        <div class="col-10">
                            {/* <h3 style={{ "margin-top": 20, "margin-bottom": 20 }}>Giving everyone the ability to be creative with their hands!</h3>
                            <p style={{}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "</p> */}
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
            <div>
                <Categories />
                <About />
            </div>
        </>
    )
}

export default Home