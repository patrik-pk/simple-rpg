
import React from "react"

import "../../styles/item/item.css"

export default class ItemComponent extends React.Component {

    state = {
        data: null,
        hasData: false,
        isHovered: false,
        stats: null,
    }

    componentDidMount() {
        if(this.props.data) {
            this.setState({ 
                data: this.props.data, 
                hasData: true 
            })
        }
    }

    componentWillUnmount() {
        this.setState({ isHovered: false })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {  
            if(nextProps.data === null) {
                return { hasData: false }
            }
            return { data: nextProps.data, hasData: true }
        }
        return null
    }

    // using parameter instead of changing value to it's opposite in order to prevent a bug
    handleHover = type => {
        if (type === "Enter") { this.setState({ isHovered: true }) }
        if (type === "Leave") { this.setState({ isHovered: false }) }
    }

    render() {
        if(this.state.hasData) {
            if(this.state.data.type !== "Empty") {
                     
                let itemBonuses

                let itemName = this.state.data.rarity + " " + this.state.data.type
                let itemStat = this.state.data.stats.statName + ": " + this.state.data.stats.value
                if (this.state.data.bonuses) {
                    itemBonuses = this.state.data.bonuses.map((bonus, index) => {
                        return <p key={index}>{bonus.displayedName + ": " + bonus.value}</p>
                    })
                }
                let itemValue = this.state.data.goldValue 

                const lowerCaseRarityClass = this.state.data.rarity.toLowerCase()
                const selectedClass = this.state.data.isSelected ? " active" : ""
                const hoveredClass = this.state.isHovered ? "active" : ""

                return (
                    <li className="item_container">
                        <div 
                        className={"item " + lowerCaseRarityClass + selectedClass}
                        onMouseEnter={() => this.handleHover("Enter")} 
                        onMouseLeave={() => this.handleHover("Leave")} 
                        onClick={this.props.handleClick ? () => this.props.handleClick(this) : null} 
                        >
                            <img alt="" src={this.state.data.imgSrc ? this.state.data.imgSrc : null}/>
                            <div className={"stats " + hoveredClass}>
                                { this.state.data ?
                                <div>
                                    <p id="name" className={lowerCaseRarityClass}>{itemName}</p>
                                    <p id="stats_heading">Stats:</p>
                                    <p>{itemStat}</p>
                                    <p id="bonuses_heading">{this.state.data.bonuses ? "Bonuses:" : null}</p>
                                    { itemBonuses }
                                    <p id="value"><span id="value_heading">Value:</span> {itemValue}</p>
                                </div>
                                : null }
                            </div>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li className="item_container"></li>
                )
            }
        } else {
            return (
                <li className="item_container"></li>
            )
        }

    }
}
