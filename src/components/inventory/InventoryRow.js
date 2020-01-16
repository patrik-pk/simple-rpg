
import React from "react"

import ItemComponent from "./ItemComponent"

class InventoryRow extends React.Component {

    getItem = index => {
        if(this.props.items[index]) {
            return this.props.items[index]
        }
        return null
    }

    render() {
        return (
            <ul>
                <ItemComponent data={this.getItem(0)} {...this.props} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(1)} {...this.props} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(2)} {...this.props} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(3)} {...this.props} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(4)} {...this.props} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(5)} {...this.props} handleClick={this.props.itemHandleClick}/>
            </ul>
        )
    }
}

export default InventoryRow