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
                        <h1 class="display-4">Creativity is about having fun</h1>
                        <p style={{fontSize: 25}}>Hands On is a place for everyone to share their creative ideas to improve their daily lives and simplify the problems they face.  </p>
                        <hr class="my-4"></hr>
                        <p style={{fontSize: 23}}>Find a guide that you like or create one to share with others now</p>
                        <a class="btn btn-primary btn-lg" href="www.google.com" role="button" style={{"backgroundColor": "#154360", border: "1px solid #154360"}}>Learn more</a>
                    </div>

                    {/* <Carousel /> */}
                </div>
                <div class="container-fluid">
                    <div class="row" style={{width:"90%",margin: "auto", maxWidth: 1700}}>
                        <Infobar />
                    </div>
                    <div class="row" style={{width:"90%",margin: "auto", maxWidth: 1700}}>
                        
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