import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setInvItemSelect, unselectShopItems, setShopItemSelect } from '../../actions/itemsActions'
import "../../styles/item/item.css"

// TODO: vyresit item handle click
function ItemComponent(props) {

    // If item has data & isn't of type 'Empty' (for shop items) render item
    if (props.data && props.data.type !== "Empty") {

        // Destructure from props
        const { data, equippedItems, shopItems, setInvItemSelect, unselectShopItems, setShopItemSelect } = props
        const { type, destination, rarity, goldValue, stats, bonuses, imgSrc, isSelected, key } = data

        // Item Handle Click
        const handleClick = () => {
            // If clicked item is in the Inventory, set its isSelected value to the opposite
            if (destination === "Inventory") {
                setInvItemSelect(key)
            }
            // If clicked item is in the Shop, only one can be selected at the same time
            if (destination === "Shop") {
                const selectedShopItems = shopItems.filter(item => item.isSelected)
                
                const cond1 = selectedShopItems.length === 1 && key === selectedShopItems[0].key
                const cond2 = selectedShopItems.length === 0
                
                // If (condition 1) there is one selected item, and it's the clicked one,
                // or if (condition 2) there are no selected items => just set items select to the opposite,
                // else unselect all shop items, and select the clicked one
                if(cond1 || cond2) {
                    setShopItemSelect(key)
                } else {
                    unselectShopItems()
                    setShopItemSelect(key)                        
                }
            }
        }

        // Classes
        const rarityClass = rarity.toLowerCase()
        const selectedClass = isSelected ? " active" : ""

        // Compared & Current Item (compared item has same type, e.g. compare bow with bow)
        const comparedItem = equippedItems.filter(item => item.type === type)[0]
        const currentItem = data

        // Single Value Comparison
        const compareSingle = (compared, current) => {
            const diff = current - compared

            if (diff > 0) return { value: '+' + Math.abs(diff), color: "green" }
            else if (diff < 0) return { value: '-' + Math.abs(diff), color: "red" }
            else if (diff === 0) return { value: diff, color: "yellow" }
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

                        if (diff > 0) diffArray.push({ value: '+' + Math.abs(diff), color: "green" })
                        else if (diff < 0) diffArray.push({ value: '-' + Math.abs(diff), color: "red" })
                        else if (diff === 0) diffArray.push({ value: diff, color: "yellow" })
                    }
                })
            })

            return diffArray
        })()

        // Destination Check
        //const destCheck = (dest === "Inventory" || dest === "Shop" || dest === "Game") ? true : false

        // Item Name
        const itemName = (() => {
            const name = rarity + " " + type + " (" + currentItem.level + ")"
            return (
                <div className="name_container">
                    <p id="name">{name}</p>
                    <p style={{ color: comparedLevel.color }}>{comparedLevel.value}</p>
                </div>
            )
        })()

        // Item Stat
        const itemStat = <div className="stat_container">
            <p>{stats.statName + ": " + stats.value}</p>
            <p style={{ color: comparedStat.color }}>{comparedStat.value}</p>
        </div>

        // Item Bonuses
        const itemBonuses = bonuses.map((bonus, i) => {
            return (
                <div key={i} className="bonus_container">
                    <p>{bonus.displayedName + ": " + bonus.value}</p>
                    <p style={{ color: comparedBonuses[i].color }}>{comparedBonuses[i].value}</p>
                </div>
            )
        })

        // RENDER
        return ( 
            <li className={`item_container ${rarityClass} ${selectedClass}`}>
                <div className={`item ${selectedClass}`} onClick={handleClick} >

                    {/* Icon */}
                    <img alt="" src={imgSrc ? imgSrc : null}/>

                    {/* Info */}
                    <div className='stats'>
                        { itemName }
                        { itemStat }
                        <div className="bonuses">
                        { itemBonuses }
                        </div>
                        <p id="value"><span id="value_heading">Value:</span> {goldValue}</p>
                    </div>

                </div>
            </li>
        )
    }
    // or render an empty item 
    return <li className="item_container"></li>
}

ItemComponent.propTypes = {
    equippedItems: PropTypes.array.isRequired,
    shopItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    equippedItems: state.items.equippedItems,
    shopItems: state.items.shopItems
})

export default connect(mapStateToProps, { setInvItemSelect, unselectShopItems, setShopItemSelect })(ItemComponent)
