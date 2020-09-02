import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './InventoryRow'
import Item from '../Item/Item'
import Stat from '../Stat/Stat'
import { 
    unselectInvItems, 
    unselectShopItems, 
    rerollShopItems, 
    addItemToInv, 
    removeShopItem, 
    removeInvItems,
    equipItem,
    sortItems 
} from '../../redux/actions/itemsActions'
import { setRolls, setGold } from '../../redux/actions/characterActions'
import getItems from './getItems'
import generateNewShopItems from './generateNewShopItems'
import { firstLetterUpperCase } from '../../shared/utils'

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

    // Custom map for creating X InventoryRow components
    const mappedRows = () => {
        const mapped = []
        for(let i = 0; i < inventoryRows; i++)
            mapped.push(<InventoryRow key={i} itemsProp={getItems('inventory', invItems, i * 6, (i * 6) + 6)} />)

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
            const newShopItems = generateNewShopItems(currentLevel, gameFlow)
            rerollShopItems(newShopItems)
            setRolls(-1)
        }
    }

    // Buy Item
    const buyItem = () => {
        if(buyCondition) {
            const item = Object.assign({}, selectedShopItems[0])
            item.destination = 'Inventory'
            item.isSelected = false
            item.goldValue = Math.ceil(item.goldValue * 0.75)
            item.key = invItems.length

            removeShopItem(selectedShopItems[0])
            addItemToInv(item, gameFlow)
            setGold(-selectedShopItems[0].goldValue)
        }
    }

    // Sell Item(s)
    const sellItem = () => {
        if(sellCondition) {
            let goldVal = 0
            selectedInvItems.forEach(item => goldVal += item.goldValue)

            removeInvItems(selectedInvItems)
            setGold(goldVal)
        }
    }

    // Equip Item
    const eqItem = () => {
        if(equipCondition) {
            // find the matching type, that is already equipped
            const equipped = equippedItems.find(item => item.name === selectedInvItems[0].name)

            // put selected item into equipped items and put the current equipped item into inventory
            equipItem(selectedInvItems[0], equipped)
        }
    }

    // Set Active Classes
    const equipClass = equipCondition ? 'active2' : ''
    const sellClass = sellCondition ? 'active2' : ''
    const rerollClass = rerollCondition ? 'active2' : ''
    const buyClass = buyCondition ? 'active2' : ''

    // Map Bonuses
    const mappedBonuses = bonuses.map((bonus, i) =>
        <Stat key={bonus.name} name={`${firstLetterUpperCase(bonus.name)}:`} value={bonuses[i].value} />
    )

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
                            <InventoryRow itemsProp={getItems('equip', equippedItems, 0, 6)} {...props} />
                            <InventoryRow itemsProp={getItems('equip', equippedItems, 6, 12)} {...props} />
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
                            { shopItems.map(item => <Item key={item.key} data={item} />) }
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
    setRolls, 
    setGold 
})(Inventory)