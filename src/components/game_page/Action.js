import React, { useState } from "react"
import mainData from "../../data/_mainData"

function Action(props) {
    
    const [hovered, setHovered] = useState(false)

    const handleHover = type => {
        if (type === "Enter") setHovered(true)
        if (type === "Leave") setHovered(false)
    }

    const activeClass = hovered ? " active" : ""
    
    // chance to hit on Action hover
    const hitChanceMult = () => {
        switch(props.data.strength) {
            case "light": return mainData.playerBase.attackTypes.hitChance.light
            case "medium": return mainData.playerBase.attackTypes.hitChance.medium
            case "strong": return mainData.playerBase.attackTypes.hitChance.strong
            default: return 1;
        }
    }
    const chanceToHit = (100 - (props.dodge * hitChanceMult())).toFixed(2)

    return (
        <div className="action">
            <button 
            onClick={() => this.props.gameManager(props.data.type, props.data.strength)}
            onMouseEnter={() => handleHover("Enter")}
            onMouseLeave={() => handleHover("Leave")}
            >
                <div className={"hit_chance" + activeClass}>
                    <p>Hit chance: </p>
                    <p>{chanceToHit + "%"}</p>
                </div>
                <div className="icon" id={props.data.id}>
                    { props.data.icon }
                </div>
            </button>
        </div>
    )
}

export default Action