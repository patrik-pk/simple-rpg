
import React from "react"

import mainData from "../../data/_mainData"

class Action extends React.Component {

    state = {
        data: {
            type: null,
            strength: null,
            text: null,
        },
        dodge: 0,
        isHovered: false
    }

    componentDidMount() {
        this.setState({ data: this.props.data, dodge: 0 })
    }

    componentWillUnmount() { this.setState({ isHovered: false }) }

    // setState after Enemy fully loads
    componentDidUpdate(prevProps) {
        if (prevProps.dodge !== this.props.dodge) {
            this.setState({ dodge: this.props.dodge })
        }
    }

    handleClick = type => {
        if(type === "Enter") { this.setState({ isHovered: true }) }
        if (type === "Leave") { this.setState({ isHovered: false }) }
    }

    render() {
        const activeClass = this.state.isHovered ? " active" : ""

        // Displaying chances to hit

        const hitChanceMult = () => {
            switch(this.state.data.strength) {
                case "light": return mainData.playerBase.attackTypes.hitChance.light
                case "medium": return mainData.playerBase.attackTypes.hitChance.medium
                case "strong": return mainData.playerBase.attackTypes.hitChance.strong
                default: return 1;
            }
        }
        const chanceToHit = (100 - (this.state.dodge * hitChanceMult())).toFixed(2)

        return (
            <div className="action">
                <button 
                onClick={() => this.props.gameManager(this.state.data.type, this.state.data.strength)}
                onMouseEnter={() => this.handleClick("Enter")}
                onMouseLeave={() => this.handleClick("Leave")}
                >
                    <div className={"hit_chance" + activeClass}>
                        <p>Hit chance: </p>
                        <p>{chanceToHit + "%"}</p>
                    </div>
                    <p>{this.state.data.text}</p>
                </button>
            </div>
        )
    }
}

export default Action