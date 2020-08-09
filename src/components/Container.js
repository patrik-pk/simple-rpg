import React from "react"
import background from "../resources/container_bg.jpg"
import "../styles/container/container.css"

export default function Container(props) {

    const page = props.page
    const sectionClass = props.sectionClass !== undefined ? props.sectionClass : ""

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