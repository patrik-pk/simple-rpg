import React from "react"

import itemRender from "../../logic/itemRender"
import "../../styles/item/item.css"

export default function ItemComponent(props) {

    // TODO:
    // - vyresit item handle click

    // If item has data & isn't of type 'Empty' (for shop items) render item
    if (props.data && props.data.type !== "Empty") {

        // render values
        const rv = itemRender(props)

        return (
            
            <li className={`item_container ${rv.rarityClass} ${rv.selectedClass}`}>
                <div
                className={`item ${rv.selectedClass}`}
                onClick={props.handleClick ? () => props.handleClick(this) : null} 
                >
                    <img alt="" src={props.data.imgSrc ? props.data.imgSrc : null}/>
                    { props.data ?
                    <div className='stats'>
                        { rv.name }
                        { rv.stat }
                        <div className="bonuses">
                        { rv.bonuses }
                        </div>
                        <p id="value"><span id="value_heading">Value:</span> {rv.value}</p>
                    </div>
                    : null }
                </div>
            </li>
        )
    }
    // or render an empty item 
    return <li className="item_container"></li>
}
