import React from "react"
import ItemComponent from "./ItemComponent"

export default function InventoryRow(props) {

    const mapped =  props.itemsProp.map((item, i) => <ItemComponent key={i} data={item} {...props} handleClick={props.itemHandleClick} />)

    return (
        <ul>
        { mapped }
        </ul>
    )
}