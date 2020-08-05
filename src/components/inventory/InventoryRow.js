import React from "react"
import ItemComponent from "./ItemComponent"

export default function InventoryRow(props) {
 
    // Custom map function to map items from props
    const mapItems = () => {
        const mapped = []
        // Loop 6 times
        for(let i = 0; i < 6; i++) {
            // If the item[i] exists, add <ItemComponent/> with data of item[i] to array
            if (props.items[i]) {
                mapped.push(<ItemComponent key={props.items[i].key} data={props.items[i]} {...props} handleClick={props.itemHandleClick} />)
            }
            // else add <ItemComponent/> with null data to array - empty item
            else mapped.push(<ItemComponent key={i} data={null} />)
        }

        return mapped
    }

    return (
        <ul>
        { mapItems() }
        </ul>
    )
}