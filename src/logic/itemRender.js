
import React from "react"


export default function itemRender(props) {

    // Classes
    const rarityClass = props.data.rarity.toLowerCase()
    const selectedClass = props.data.isSelected ? " active" : ""

    // Compared & Current Item (compared item has same type, e. g. compare bow with bow)
    const comparedItem = props.equippedItems.filter(item => item.type === props.data.type)[0]
    const currentItem = props.data

    // Single Value Comparison
    const compareSingle = (compared, current) => {
        const diff = current - compared

        if (diff > 0) return { type: 'better', value: '+' + Math.abs(diff) }
        else if (diff < 0) return { type: 'worse', value: '-' + Math.abs(diff) }
        else if (diff === 0) return { type: 'same', value: diff }
    }

    // Compare Stat and Level
    const comparedStat = compareSingle(comparedItem.stats.value, currentItem.stats.value)
    const comparedLevel = compareSingle(comparedItem.level, currentItem.level)

    // Compare Bonuses
    const comparedBonuses = (() => {
        const compBonuses = comparedItem.bonuses
        const currBonuses = currentItem.bonuses
        let diffArray = []

        // Loop through current and nested bonuses,
        currBonuses.forEach(current => {
            const currName = current.name
            const currVal = current.value

            compBonuses.forEach(compared => {
                const compName = compared.name
                const compVal = compared.value

                // if they match, calculate the diff and push to diffArray
                if (currName === compName) {
                    const diff = currVal - compVal

                    if (diff > 0) diffArray.push({ type: 'better', value: '+' + Math.abs(diff) })
                    else if (diff < 0) diffArray.push({ type: 'worse', value: '-' + Math.abs(diff) })
                    else if (diff === 0) diffArray.push({ type: 'same', value: diff })
                }
            })
        })

        return diffArray
    })()

    // Destination Check
    const dest = props.data.destination
    const destCheck = (dest === "Inventory" || dest === "Shop" || dest === "Game") ? true : false

    // Set style function
    const setComparedStyle = (compType) => {
        if (destCheck) {
            const comparedType = compType
            switch (comparedType) {
                case "better": return { color: "green" }
                case "worse": return { color: "red" }
                case "same": return { color: "yellow" }
                default: break;
            }
        } else return null
    }

    // ASSINGMENT
    const itemName = () => {
        const name = props.data.rarity + " " + props.data.type + " (" + currentItem.level + ")"
        const comparedValue = destCheck ? comparedLevel.value : null
        return (
            <div className="name_container">
                <p id="name">{name}</p>
                <p style={destCheck ? setComparedStyle(comparedLevel.type) : null}>{comparedValue}</p>
            </div>
        )
    }
    const itemValue = props.data.goldValue 
    const itemStat = () => {
        const comparedValue = destCheck ? comparedStat.value : null
        return (
            <div className="stat_container">
                <p>{props.data.stats.statName + ": " + props.data.stats.value}</p>
                <p style={destCheck ? setComparedStyle(comparedStat.type) : null}>{comparedValue}</p>
            </div>
        )
    }
    const itemBonuses = props.data.bonuses.map((bonus, index) => {
        const comparedValue = destCheck ? comparedBonuses[index].value : null
        return (
            <div key={index} className="bonus_container">
                <p>{bonus.displayedName + ": " + bonus.value}</p>
                <p style={destCheck ? setComparedStyle(comparedBonuses[index].type) : null}>{comparedValue}</p>
            </div>
        )
    })

    // FINAL RETURN
    return { 
        name: itemName(),
        stat: itemStat(), 
        bonuses: itemBonuses,
        value: itemValue,
        rarityClass: rarityClass,
        selectedClass: selectedClass,
    }
}