
import React from "react"

import background from "../resources/container_bg.jpg"
import "../styles/container/container.css"

class Container extends React.Component {

    render() {
        // page renders Menu, Inventory and Dungeon
        const page = this.props.page
        const sectionClass = this.props.sectionClass !== undefined ? this.props.sectionClass : ""

        const bg_style = {
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }

        return (
            <section className={"container " + sectionClass} style={bg_style}>
                <div className="box">
                    { page }
                </div>
            </section>
        )
    }
}

export default Container