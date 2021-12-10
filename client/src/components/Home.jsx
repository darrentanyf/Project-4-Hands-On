import React from "react"
import Navibar from "../components/Navibar"
import Carousel from "../components/Carousel"
import Cards from "../components/Cards"
import Infobar from "../components/Infobar"
import Container from "react-bootstrap/Container"
import Categories from "../components/Categories"
import About from "../components/About"

{/* <div class="jumbotron jumbotron-fluid" style="background-image: url(&quot;https://images.unsplash.com/photo-1551970634-747846a548cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3540&amp;q=80&quot;); 
background-size: cover; background-position: center center; color: white;"><div class="container" style="padding: 5em;"><h1 class="display-4">Reduce, Reuse, Recycle</h1><p class="lead">One man's trash is another man's treasure. <br>R3 is a community driven marketplace with the environmentally conscious goal of reducing waste. We hope to promote the exchange of goods through barter transactions to give pre-loved items a second life.</p><hr class="my-4" style="border-color: white;"><p>Find out more and connect with your barter buddy today</p><p class="lead"><a href="/login"><a class="btn btn-primary btn-md mr-2 mb-2" href="#asd" role="button" style="width: 110px; box-shadow: none; outline: none;">Sign-In</a></a><a href="/aboutus"><a class="btn btn-primary btn-md mr-2 mb-2" href="#asd" role="button" style="width: 110px; box-shadow: none; outline: none;">About Us</a></a></p></div></div> */}

const Home = () => {

    return (
        <>
            <div style={{ "background-color": "#F1F1F1" }}>
                <div>
                    <Navibar />
                </div >
                <div class="jumbotron jumbotron-fluid" style={{
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    color: "white"
                }}>
                    <div class="container" style={{ padding: "15em" }}>  
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>

                    {/* <Carousel /> */}
                </div>
                <div class="container">
                    <div class="row" style={{ margin: 20 }}>
                        <div class="col"></div>
                        <div class="col-7">
                            <h3 style={{ "margin-top": 20, "margin-bottom": 20 }}>Giving everyone the ability to be creative with their hands!</h3>
                            <p style={{}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <div>
                <Categories />
                <About />
            </div>
        </>
    )
}

export default Home