import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setInvItemSelect, unselectShopItems, setShopItemSelect } from '../../actions/itemsActions'
import "../../styles/item/item.css"

function ItemComponent(props) {
    
    // If item has data & isn't of type 'Empty' (for shop items) render item
    if (props.data && props.data.type !== "Empty") {

        // Destructure from props
        const { data, equippedItems, shopItems, setInvItemSelect, unselectShopItems, setShopItemSelect } = props
        const { type, destination, rarity, goldValue, stats, bonuses, imgSrc, isSelected, key } = data
        const currentItem = data

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

        // Destination Check - if Item is equipped, don't compare anything
        const isEquipped = destination === 'Equipped' ? true : false

        // COMPARISON
        const comparison = (() => {

            // If Item is equipped, break out of this function
            if(isEquipped) return {}

            // Compared Item (compare current Item with the equipped item of same type, e.g. bow with bow)
            const comparedItem = equippedItems.filter(item => item.type === type)[0]
    
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

            // Final Return
            return { 
                level: comparedLevel, 
                stat: comparedStat, 
                bonuses: comparedBonuses 
            }
        })()

        // Item Name
        const itemName = (() => {
            const name = rarity + " " + type + " (" + currentItem.level + ")"
            const comparedValue = comparison.level ? comparison.level.value : null
            const style = comparison.level ? { color: comparison.level.color } : null
            return (
                <div className="name_container">
                    <p id="name">{name}</p>
                    <p style={style}>{comparedValue}</p>
                </div>
            )
        })()

        // Item Stat
        const itemStat = (() => {
            const comparedValue = comparison.stat ? comparison.stat.value : null
            const style = comparison.stat ? { color: comparison.stat.color } : null
            return (
                <div className="stat_container">
                    <p>{stats.statName + ": " + stats.value}</p>
                    <p style={style}>{comparedValue}</p>
                </div> 
            )
        })() 

        // Item Bonuses
        const itemBonuses = bonuses.map((bonus, i) => {
            const name = bonus.name.charAt(0).toUpperCase() + bonus.name.slice(1)
            const comparedValue = comparison.bonuses ? comparison.bonuses[i].value : null
            const style = comparison.bonuses ? { color: comparison.bonuses[i].color } : null
            return (
                <div key={i} className="bonus_container">
                    <p>{name + ": " + bonus.value}</p>
                    <p style={style}>{comparedValue}</p>
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
