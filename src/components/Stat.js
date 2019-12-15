
import React from "react"

function Stat(props) {
    return (
        <li>
            <p>{props.name}</p>
            <p>{props.value}</p>
        </li>
    )
}

export default Stat