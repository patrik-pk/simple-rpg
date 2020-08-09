import React from "react"
import { Link } from "react-router-dom"
import background from "../resources/container_bg.jpg"
import "../styles/homepage/homepage.css"

export default function HomePage(props) {

    const homepage_style = {
        backgroundImage: "url(" + background + ")",            
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
    }

    return (
        <section className="home_page" style={homepage_style}>
            <div className="dark_overlay"></div>
            <div className="content">
                <h1>Welcome to <span className="bold coloured">SimpleRPG</span></h1>
                <Link className="register_btn" to="/menu">Play now</Link>
            </div>
            <div className="corner">
                <h4>
                    written in pure 
                    <span className="bold coloured"> React.js </span> 
                    by  <a href="https://patrikpk-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">patrikpk.com</a>
                </h4>
            </div>
        </section>
    )
}
