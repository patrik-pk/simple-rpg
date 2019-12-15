
import React from "react"

import ItemComponent from "./ItemComponent"

class InventoryRow extends React.Component {

    state = {
        items: null
    }

    componentDidMount() {
        this.setState({ items: this.props.items })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.items !== prevState.items) {
            return { items: nextProps.items }
        }
        return null
    }

    getItem = index => {
        if(this.props.items[index]) {
            return this.props.items[index]
        }
        return null
    }

    render() {

        return (
            <ul>
                <ItemComponent data={this.getItem(0)} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(1)} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(2)} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(3)} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(4)} handleClick={this.props.itemHandleClick}/>
                <ItemComponent data={this.getItem(5)} handleClick={this.props.itemHandleClick}/>
            </ul>
        )
    }
}

export default InventoryRow