
import React from "react"

function Stat(props) {
    // this is a simple Stat Component render in
    // Inventory and Game(for both Player and Enemy)

    const name = props.name
    const value = props.value
    
    // Set the higher Armor stat of the Boss to red color
    const bossClass = (typeOfArmor) => {
        if(props.enemy !== undefined) {
            const type = props.enemy.type
            if (type === "Boss") {
                if(name === "M-Armor:" || name==="R-Armor:") {
                    const meleeArmor = props.enemy.meleeArmor
                    const rangedArmor = props.enemy.rangedArmor
                    const higherValue = Math.max(meleeArmor, rangedArmor)

                    if(value === higherValue) return "boss"
                    else return ""
                } else return ""
            } else return ""
        } else return ""
    }

    return (
        <li className={"stat_cont " + bossClass(name)} >
            <p>{name}</p>
            <p>{value}</p>
        </li>
    )
}

export default Stat