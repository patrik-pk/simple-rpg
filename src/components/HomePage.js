
import React from "react"
import { Link } from "react-router-dom"

import background from "../resources/container_bg.jpg"
import "../styles/homepage/homepage.css"


class HomePage extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() { 
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000)
    }

    render() {

        const homepage_style = {
            backgroundImage: "url(" + background + ")",            
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        if(this.state.isLoading === false) {
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
        } else {
            return (
                <div className="loading">
                    <div className="circle-loading"></div>
                </div>
            )
        }
    }

}

export default HomePage
