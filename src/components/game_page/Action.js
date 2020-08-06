import React from "react"
import mainData from "../../data/_mainData"

function Action(props) {
    
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
            <button onClick={() => props.gameManager(props.data.type, props.data.strength)}>
                <div className="hit_chance">
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