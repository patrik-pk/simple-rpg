import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setInvItemSelect, unselectShopItems, setShopItemSelect } from '../../actions/itemsActions'
import '../../styles/item/item.css'

function ItemComponent(props) {
    
    // If item has data & isn't of type 'Empty' (for shop items) render item
    if (props.data && props.data.type !== 'Empty') {

        // Destructure from props
        const { 
            data: {
                name,
                destination,
                rarity,
                stats,
                bonuses,
                goldValue,
                level,
                icon,
                isSelected,
                key,
                type,
                amount,
                classes
            }, 
            equippedItems, 
            shopItems, 
            setInvItemSelect, 
            unselectShopItems, 
            setShopItemSelect,
            renderedInGame 
        } = props

        const currentItem = props.data

        // Item Handle Click
        const handleClick = () => {
            // If this Item is rendered in Game.js, don't do anything
            if(renderedInGame) return
            // If clicked item is in the Inventory, set its isSelected value to the opposite
            if (destination === 'Inventory') {
                setInvItemSelect(key)
            }
            // If clicked item is in the Shop, only one can be selected at the same time
            if (destination === 'Shop') {
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

        // Checks
        const isEquipped = destination === 'Equipped' ? true : false
        const isDrop = type === 'drop' ? true : false

        // Set Classes - first push items into array, 
        // then join them into single string with with space between them
        const setClasses = () => {
            const classesArray = []

            if(rarity) classesArray.push(rarity.toLowerCase())
            if(isSelected) classesArray.push('selected')
            if(isDrop) classesArray.push('drop')
            if(classes) {
                classes.forEach(item => classesArray.push(item))
            }


            return classesArray.join(' ')
        }

        // COMPARISON
        const comparison = (() => {
            
            // If Item is equipped, or its Drop Item break out of this function
            if(isEquipped || isDrop) return {}

            // Compared Item (compare current Item with the equipped item of same name, e.g. bow with bow)
            const comparedItem = equippedItems.filter(item => item.name === name)[0]
    
            // Single Value Comparison
            const compareSingle = (compared, current) => {
                const diff = current - compared
    
                if (diff > 0) return { value: '+' + Math.abs(diff), color: 'green' }
                else if (diff < 0) return { value: '-' + Math.abs(diff), color: 'red' }
                else if (diff === 0) return { value: diff, color: 'yellow' }
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
    
                            if (diff > 0) diffArray.push({ value: '+' + Math.abs(diff), color: 'green' })
                            else if (diff < 0) diffArray.push({ value: '-' + Math.abs(diff), color: 'red' })
                            else if (diff === 0) diffArray.push({ value: diff, color: 'yellow' })
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
        const itemName = () => {
            if (isDrop) {
                // make the first letter of every word upper case
                let nameArray = name.split(' ')
                const upperCaseArray = nameArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
                const nameVal = upperCaseArray.join(' ')

                return (
                    <div className='name_container'>
                        <p id='name'>{nameVal}</p>
                    </div>
                )
            } else {
                const nameVal = `${rarity} ${name} (${level})`
                const comparedValue = comparison.level ? comparison.level.value : null
                const style = comparison.level ? { color: comparison.level.color } : null
                return (
                    <div className='name_container'>
                        <p id='name'>{nameVal}</p>
                        <p style={style}>{comparedValue}</p>
                    </div>
                )
            } 
        }

        // Item Stat
        const itemStat = () => {
            if(isDrop) return null
            const comparedValue = comparison.stat ? comparison.stat.value : null
            const style = comparison.stat ? { color: comparison.stat.color } : null
            return (
                <div className='stat_container'>
                    <p>{stats.statName + ': ' + stats.value}</p>
                    <p style={style}>{comparedValue}</p>
                </div> 
            )
        }

        // Item Bonuses
        const itemBonuses = isDrop ? null : bonuses.map((bonus, i) => {
            const name = bonus.name.charAt(0).toUpperCase() + bonus.name.slice(1)
            const comparedValue = comparison.bonuses ? comparison.bonuses[i].value : null
            const style = comparison.bonuses ? { color: comparison.bonuses[i].color } : null
            return (
                <div key={i} className='bonus_container'>
                    <p>{name + ': ' + bonus.value}</p>
                    <p style={style}>{comparedValue}</p>
                </div>
            )
        })

        // RENDER
        return ( 
            <li className={`item_container ${setClasses()}`}>
                <div className='item' onClick={handleClick} >

                    {/* Icon */}
                    { icon.render() } 

                    {/* Info */}
                    <div className='stats'>
                        { itemName() }
                        { itemStat() }
                        { itemBonuses ? <div className='bonuses'>{itemBonuses}</div> : null }
                        <p id='value'><span id='value_heading'>Value:</span> {goldValue}</p>
                    </div>

                    {/* Drop Amount - only for drop items */}
                    { amount ? <p className='drop-amount'>{amount}</p> : null }
                </div>
            </li>
        )
    }
    // or render an empty item 
    return <li className='item_container'></li>
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
