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
            <div style={{ "background-image": "#F1F1F1" }}>
                <div>
                    <Navibar />
                </div >
                <div class="jumbotron jumbotron-fluid" style={{
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1627226325480-f46163bc38c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: 600,
                    color: "white"
                }}>
                    <div class="container" >
                        <div class="col"></div>
                        <div class="col-10" style={{margin:"0 auto", padding: 80}}>
                        <p style={{fontSize: 70,textAlign: "center"}}class="display-4">Creativity is about having fun</p>
                        <p class="lead" style={{fontSize: 25, textAlign: "center"}}>Hands On is a place for everyone to share their creative ideas to improve their daily lives and share them to the world. Be creative, have fun and share!</p>
                        <hr class="my-4"></hr>
                        <p style={{fontSize: 23, textAlign: "center"}}>Find a guide that you like or create one to share with others now</p>
                        <a class="btn btn-primary btn-lg" href="http://localhost:3000/signup" role="button" style={{"backgroundColor": "#154360", border: "1px solid #154360", marginLeft: 5, width: 150}}>Sign up</a>
                        <a class="btn btn-primary btn-lg" href="http://localhost:3000/about" role="button" style={{"backgroundColor": "#154360", border: "1px solid #154360", marginLeft: 5, width: 150}}>Learn more</a>
                        </div>
                        <div class="col"></div>
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
            <div class="container" style={{ "border-top": "1px solid #EFF1F2", "border-bottom": "1px solid #EFF1F2", padding: 20}}>
                
            </div>
        </>
    )
}

export default Home