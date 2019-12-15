
import React from "react"
import { Link } from "react-router-dom"

import "../styles/navigation/navigation.css"

function Navigation() {

    return(
        <nav className="nav sticky" id="nav">

            <a className="logo" href="localhost:3000">Logo</a>

            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/menu" className="link">Play</Link></li>
                <li><Link to="/contact" className="link" >Contact</Link></li>
            </ul>

        </nav>
    )
}

export default Navigation