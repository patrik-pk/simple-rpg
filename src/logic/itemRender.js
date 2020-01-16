
import React from "react"


export default function itemRender(props, state) {
    // logic for displaying item's data

    // classes
    const lowerCaseRarityClass = state.data.rarity.toLowerCase()
    const selectedClass = state.data.isSelected ? " active" : ""
    const hoveredClass = state.isHovered ? "active" : ""

    const typeOfCurrentItem = state.data.type
    let equippedItems = props.equippedItems
    // loop through array until it finds the matching item
    let comparedItem = equippedItems.filter(item => {
        if (item.type === typeOfCurrentItem) return item
        else return null
    }) // returns array with a single element

    comparedItem = comparedItem[0]
    const currentItem = state.data

    // SINGLE STAT COMPARE - for Stat and Level
    const compareSingle = (comp, curr) => {

        const diff = curr - comp
        let value = Math.abs(diff)

        let type
        if (diff > 0) { type = "better"; value = "+" + value }
        else if (diff < 0) { type = "worse"; value = "-" + value }
        else if (diff === 0) { type = "same"; }

        return { type: type, value: value }
    }

    // COMPARE BONUSES
    const compareBonuses = () => {
        const compBonuses = comparedItem.bonuses
        const currBonuses = currentItem.bonuses

        let diffArray = []


        currBonuses.forEach(bonus => {
            const currName = bonus.effectiveAgainst
            const currVal = bonus.value

            compBonuses.forEach(bon => {
                const compName = bon.effectiveAgainst
                const compVal = bon.value

                if (currName === compName) {
                    const diff = currVal - compVal
                    let value = Math.abs(diff)

                    let type
                    if (diff > 0) { type = "better"; value = "+" + value }
                    else if (diff < 0) { type = "worse"; value = "-" + value }
                    else if (diff === 0) { type = "same"; }

                    diffArray.push({ name: currName, value: value, type })
                }
            })
        })

        return diffArray
    }

    const comparedStat = compareSingle(comparedItem.stats.value, currentItem.stats.value)
    const comparedBonuses = compareBonuses()
    const comparedLevel = compareSingle(comparedItem.level, currentItem.level)

    const dest = state.data.destination
    const destCheck = (dest === "Inventory" || dest === "Shop" || dest === "Game") ? true : false

    // SET STYLE FUNCTION
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
        const name = state.data.rarity + " " + state.data.type + " (" + currentItem.level + ")"
        const comparedValue = destCheck ? comparedLevel.value : null
        return (
            <div className="name_container">
                <p id="name" className={lowerCaseRarityClass}>{name}</p>
                <p style={destCheck ? setComparedStyle(comparedLevel.type) : null}>{comparedValue}</p>
            </div>
        )
    }
    const itemValue = state.data.goldValue 
    const itemStat = () => {
        const comparedValue = destCheck ? comparedStat.value : null
        return (
            <div className="stat_container">
                <p>{state.data.stats.statName + ": " + state.data.stats.value}</p>
                <p style={destCheck ? setComparedStyle(comparedStat.type) : null}>{comparedValue}</p>
            </div>
        )
    }
    const itemBonuses = state.data.bonuses.map((bonus, index) => {
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
        lowerCaseRarityClass: lowerCaseRarityClass,
        selectedClass: selectedClass,
        hoveredClass: hoveredClass,
    }
}