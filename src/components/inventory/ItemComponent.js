
import React from "react"

import itemRender from "../../logic/itemRender"
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

    handleHover = type => {
        if (type === "Enter") { this.setState({ isHovered: true }) }
        if (type === "Leave") { this.setState({ isHovered: false }) }
    }

    render() {
        if(this.state.hasData) {
            if(this.state.data.type !== "Empty") {

                const renderValues = itemRender(this.props, this.state)

                return (
                    <li className={"item_container " + renderValues.lowerCaseRarityClass + renderValues.selectedClass}>
                        <div 
                        className={"item " + renderValues.lowerCaseRarityClass + renderValues.selectedClass}
                        onMouseEnter={() => this.handleHover("Enter")} 
                        onMouseLeave={() => this.handleHover("Leave")} 
                        onClick={this.props.handleClick ? () => this.props.handleClick(this) : null} 
                        >
                            <img alt="" src={this.state.data.imgSrc ? this.state.data.imgSrc : null}/>
                            { this.state.data ?
                            <div className={"stats " + renderValues.hoveredClass}>
                                { renderValues.name }
                                { renderValues.stat }
                                <div className="bonuses">
                                { renderValues.bonuses }
                                </div>
                                <p id="value"><span id="value_heading">Value:</span> {renderValues.value}</p>
                            </div>
                            : null }
                        </div>
                    </li>
                )
            } else return <li className="item_container"></li>
        } else return <li className="item_container"></li>
    }
}
