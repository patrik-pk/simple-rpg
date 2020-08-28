import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './InventoryRow'
import ItemComponent from './ItemComponent'
import Stat from '../Stat'
import { 
    unselectInvItems, 
    unselectShopItems, 
    rerollShopItems, 
    addItemToInv, 
    removeShopItem, 
    removeInvItems,
    equipItem,
    sortItems 
} from '../../actions/itemsActions'
import { setRolls, setGold } from '../../actions/characterActions'
import { updatePlayerStats } from '../../actions/playerActions'
import possibleDrops from '../../data/possibleDrops'
import generateItem from '../../logic/generateItem'
import generateDrop from '../../logic/generateDrop'
import randomGenerator from '../../logic/randomGenerator'
import firstLetterUpperCase from '../../logic/firstLetterUpperCase'
import calculatePlayerStats from '../../logic/calculatePlayerStats'

function Inventory(props) {

    // Destructure from props
    const { 
        character, 
        items, 
        unselectInvItems, 
        unselectShopItems, 
        rerollShopItems, 
        addItemToInv, 
        removeShopItem, 
        removeInvItems,
        equipItem,
        sortItems,
        updatePlayerStats,
        setRolls, 
        setGold 
    } = props
    const { equippedItems, invItems, shopItems, inventoryRows } = items
    const { gold, currentLevel, gameFlow, rolls } = character
    const { maxHp, armor, meleeDamage, rangedDamage, critChance, blockChance, bonuses } = props.player

    // Unselect all Inventory & Shop Items on Unmount
    useEffect(() => {
        return () => {
            unselectInvItems()
            unselectShopItems()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Watch for equippedItems, and re-calulate player stats if they change
    useEffect(() => {
        updatePlayerStats(calculatePlayerStats(equippedItems, currentLevel))
    }, [equippedItems, updatePlayerStats, currentLevel])

    // Slice item's into a 6 item array and put them into the InventoryRow Component
    const getItems = (items, min, max) => {
        const sliced = items.slice(min, max) 
        let newItems = []

        // Loop through max-min (6),
        for(let i = 0; i < max-min; i++) {
            // if item at index of i exists, put it into array
            if(sliced[i]) newItems.push(sliced[i]) 
            // if it doesn't push null into the array
            else newItems.push(null)
        }

        return newItems
    }

    // Custom map for creating X InventoryRow components
    const mappedRows = () => {
        const mapped = []

        for(let i = 0; i < inventoryRows; i++) {
            mapped.push(<InventoryRow key={i} itemsProp={getItems(invItems, i * 6, (i * 6) + 6)} itemHandleClick={props.itemHandleClick} {...props} />)
        }

        return mapped
    }

    // Filter out selected Inventory and Shop items
    const selectedInvItems = invItems.filter(item => item.isSelected)
    const selectedShopItems = shopItems.filter(item => item.isSelected)

    // Conditions
    const haveSpaceInv = invItems.length <= (inventoryRows * 6) - 1 ? true : false
    const buyCondition = selectedShopItems.length === 1 && haveSpaceInv && gold >= selectedShopItems[0].goldValue
    const equipCondition = selectedInvItems.length === 1 && selectedInvItems[0].type !== 'drop'
    const rerollCondition = rolls > 0 
    const sellCondition = selectedInvItems.length > 0

    // Reroll Items
    const reroll = () => {
        if(rerollCondition) {
            let newShopItems = []
            
            // 50% chance to 4 generate items, 50% to generate 4 drop items
            const random = randomGenerator(1, 100, 1)

            for (let i = 0; i < 4; i++) {
                if(random < 50) newShopItems.push(generateItem(currentLevel, 'Shop', i))
                else {
                    const dropsArray = Object.values(possibleDrops)
                    
                    // get proper indexes based on level to generate low, medium or high level drops
                    let dropIndexes = [0, 0]
                    if(currentLevel <= 12) dropIndexes = [0, 3]
                    else if(currentLevel > 12 && currentLevel <= 22) dropIndexes = [1, 4]
                    else if(currentLevel > 22) dropIndexes = [2, 5]

                    // get random drop index out of the two available
                    const randomIndex = dropIndexes[Math.floor(Math.random() * dropIndexes.length)]

                    // get random specie
                    const randomSpecie = dropsArray[Math.floor(Math.random() * dropsArray.length)]

                    // make an array out of that specie object 
                    const specieArr = Object.values(randomSpecie)

                    // get the drop from generated index
                    const dropItem = specieArr[randomIndex]

                    // destructure drop item
                    const { iconKey, name, icon, classVal, goldValue } = dropItem

                    // get random amount
                    const randomAmount = randomGenerator(3, 5)

                    // get gameFlow, which has to be minimum of 1
                    const gameFlowVal = gameFlow > 1 ? gameFlow : 1

                    // multiply value by gameFlow and that amount
                    const value = goldValue * gameFlowVal * randomAmount

                    // push the item to the array
                    newShopItems.push(generateDrop(iconKey, 'Shop', i, randomAmount, name, icon, [classVal], value))
                }
            }

            // set the shop items state
            rerollShopItems(newShopItems)
            setRolls(-1)
        }
    }

    // Buy Item
    const buyItem = () => {
        if(buyCondition) {
            const selectedItem = selectedShopItems[0]

            // make a copy of selectedItem
            const item = Object.assign({}, selectedItem)
            item.destination = 'Inventory'
            item.isSelected = false
            item.goldValue = Math.ceil(item.goldValue * 0.75)
            item.key = invItems.length

            removeShopItem(selectedItem)
            addItemToInv(item)
            setGold(-selectedItem.goldValue)
        }
    }

    // Sell Item(s)
    const sellItem = () => {
        if(sellCondition) {
            let goldVal = 0
            selectedInvItems.forEach(item => {
                goldVal += item.goldValue
            })

            removeInvItems(selectedInvItems)
            setGold(goldVal)
        }
    }

    // Equip Item
    const eqItem = () => {
        if(equipCondition) {
            
            // find the matching type, that is already equipped
            const equipped = equippedItems.filter(item => item.name === selectedInvItems[0].name)

            // put selected item into equipped items and put the current equipped item into inventory
            equipItem(selectedInvItems[0], equipped[0])

            // recalculate player stats - returns object with new values
            updatePlayerStats(calculatePlayerStats(equippedItems, currentLevel))
        }
    }

    // Set Active Classes
    const equipClass = equipCondition ? 'active2' : ''
    const sellClass = sellCondition ? 'active2' : ''
    const rerollClass = rerollCondition ? 'active2' : ''
    const buyClass = buyCondition ? 'active2' : ''

    // Map Bonuses
    const mappedBonuses = bonuses.map((bonus, i) => {
        return <Stat key={bonus.name} name={`${firstLetterUpperCase(bonus.name)}:`} value={bonuses[i].value} />
    })

    // Render
    return(
        <div className='inventory'>

            {/* Heading */}
            <h3 className='heading'>Inventory</h3>

            {/* Container */}
            <div className='container'>

                {/* Left - Equipped Items, Stats, Shop */}
                <div className='left'>

                    {/* Top - Equipped Items, Stats */}
                    <div className='top'>

                        {/* Equipped Items */}
                        <div className='current-equipment'>
                            <InventoryRow itemsProp={getItems(equippedItems, 0, 6)} {...props} />
                            <InventoryRow itemsProp={getItems(equippedItems, 6, 12)} {...props} />
                        </div>

                        {/* Player Stats */}
                        <div className='player-stats'>
                            <h4 className='name'>Player Stats</h4>
                            <ul>
                                <Stat name='HP:' value={maxHp} />
                                <Stat name='Armor:' value={armor} />
                                <Stat name='M-DMG:' value={meleeDamage} />
                                <Stat name='R-DMG:' value={rangedDamage} />
                                <Stat name='Crit(%):' value={critChance} />
                                <Stat name='Block(%):' value={blockChance} />
                                <br />
                                { mappedBonuses }
                            </ul>
                        </div>

                    </div>

                    {/* Shop */}
                    <div className='shop'>

                        {/* Items */}
                        <div className='items'>
                            <ItemComponent data={shopItems[0]} {...props} />
                            <ItemComponent data={shopItems[1]} {...props} />
                            <ItemComponent data={shopItems[2]} {...props} />
                            <ItemComponent data={shopItems[3]} {...props} />
                        </div>

                        {/* Options */}
                        <div className='options'>
                            <button className={`btn reroll-btn ${rerollClass}`} onClick={reroll}>Roll (1)</button>
                            <button className={`btn buy-btn ${buyClass}`} onClick={buyItem}>Buy</button>
                        </div>

                    </div>

                </div>

                {/* Right - Inventory Items */}
                <div className='right'>

                    {/* Items */}
                    <div className='inventory-items'>
                        { mappedRows() }
                    </div>

                    {/* Options */}
                    <div className='options'>

                        {/* Sort Button */}
                        <button className='btn sort-btn active2' onClick={sortItems}><p>*</p></button>

                        {/* Equip & Sell Buttons */}
                        <div className='options-right'>
                            <button className={`btn equip-btn ${equipClass}`} onClick={eqItem}>Equip</button>
                            <button className={`btn sell-btn ${sellClass}`} onClick={sellItem}>Sell</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

Inventory.propTypes = {
    character: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    character: state.character,
    items: state.items,
    player: state.player
})

export default connect(mapStateToProps, { 
    unselectInvItems, 
    unselectShopItems, 
    rerollShopItems, 
    addItemToInv, 
    removeShopItem, 
    removeInvItems,
    equipItem,
    sortItems,
    updatePlayerStats,
    setRolls, 
    setGold 
})(Inventory)