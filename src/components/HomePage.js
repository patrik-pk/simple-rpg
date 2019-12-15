
import React from "react"
import { Link } from "react-router-dom"

import styles from "../data/styles"
import "../styles/homepage/homepage.css"


function HomePage() {

    return (
        <section className="home_page">
            <header style={styles.homepage_style}>
                <div className="dark_overlay"></div>
                <h1>Welcome to <span className="bold coloured">MyRPGame</span></h1>
                <Link className="register_btn" to="/menu">Play now</Link>
            </header>
        </section>
    )
}

export default HomePage