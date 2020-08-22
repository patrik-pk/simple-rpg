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
    equipItem 
} from '../../actions/itemsActions'
import { setDiamonds, setGold } from '../../actions/characterActions'
import { recalculatePlayerStats } from '../../actions/playerActions'
import generateItem from '../../logic/generateItem'
import generateDrop from '../../logic/generateDrop'
import randomGenerator from '../../logic/randomGenerator'
import cps from '../../logic/calculatePlayerStats'

import '../../styles/inventory/inventory.css'

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
        recalculatePlayerStats,
        setDiamonds, 
        setGold 
    } = props
    const { equippedItems, invItems, shopItems } = items
    const { gold, diamonds, currentLevel } = character
    const { maxHp, armor, meleeDamage, rangedDamage, critChance, blockChance, bonuses } = props.player

    // Unselect all Inventory & Shop Items on Unmount
    useEffect(() => {
        return () => {
            unselectInvItems()
            unselectShopItems()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    // Custom map for creating 6 InventoryRow components
    const mappedRows = () => {
        const mapped = []

        for(let i = 0; i < 6; i++) {
            mapped.push(<InventoryRow key={i} itemsProp={getItems(invItems, i * 6, (i * 6) + 6)} itemHandleClick={props.itemHandleClick} {...props} />)
        }

        return mapped
    }

    // Filter out selected Inventory and Shop items
    const selectedInvItems = invItems.filter(item => item.isSelected)
    const selectedShopItems = shopItems.filter(item => item.isSelected)

    // Conditions
    const buyCondition = selectedShopItems.length === 1 && invItems.length <= 35
    const equipCondition = selectedInvItems.length === 1 && selectedInvItems[0].type !== 'drop'
    const rerollCondition = diamonds > 0 
    const sellCondition = selectedInvItems.length > 0

    // Reroll Items
    const reroll = () => {
        if(rerollCondition) {
            let newShopItems = []
            
            for (let i = 0; i < 3; i++) {
                const random = randomGenerator(1, 100, 1)
                // 75% chance to generate item, 25% to generate drop
                if(random < 75) newShopItems.push(generateItem(currentLevel, 'Shop', i))
                else {
                    newShopItems.push(generateDrop('Shop', i))
                }
            }

            rerollShopItems(newShopItems)
            setDiamonds(-1)
        }
    }

    // Buy Item
    const buyItem = () => {
        if(buyCondition) {
            const selectedItem = selectedShopItems[0]
            if (gold >= selectedItem.goldValue) {

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
            // recalculate player stats - cps (calculatePlayerstats) returns object with new values
            recalculatePlayerStats(cps(equippedItems))
        }
    }

    // Set active classes
    const equipActive = equipCondition ? 'active' : 'null'
    const sellActive = sellCondition ? 'active' : 'null'
    const rerollActive = rerollCondition ? 'active' : 'null'

    // If Player has 1 selected shop item, has space in Inventory 
    // and has money to buy that items, return active for buy btn class
    const buyActive = () => {
        if (buyCondition) {
            const selectedItem = selectedShopItems[0]
            if(gold >= selectedItem.goldValue) {
                return 'active'
            }
        }
        return ''
    }

    return(
        <div className='inventory'>
            
            <div className='top'>
                <div className='left'>
                    <div className='current_equipment'>
                        <div className='wrapper'>
                            <InventoryRow itemsProp={getItems(equippedItems, 0, 6)} {...props}/>                                        
                            <InventoryRow itemsProp={getItems(equippedItems, 6, 12)} {...props}/>                                        
                        </div>
                    </div>
                    <div className='player_stats'>
                        <div className='wrapper'>
                            <h4 className='name'>Stats</h4>
                            <hr/>
                            <ul>
                                <Stat name='HP:' value={maxHp}/>
                                <Stat name='Armor:' value={armor}/>
                                <Stat name='M-DMG:' value={meleeDamage}/>
                                <Stat name='R-DMG:' value={rangedDamage}/>
                                <Stat name='Crit(%):' value={critChance}/>
                                <Stat name='Block(%):' value={blockChance} />
                                <br/>
                                <Stat name='Beasts:' value={bonuses[0].value} />
                                <Stat name='Dragons:' value={bonuses[1].value} />
                                <Stat name='Insect:' value={bonuses[2].value} />
                                <Stat name='Monsters:' value={bonuses[3].value} />
                                <Stat name='Reptiles:' value={bonuses[4].value} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='items_container'>
                        <div className='wrapper'>
                            <div className='items'>
                                { mappedRows() }
                            </div>
                        </div>
                        <div className='options'>
                            <div className='wrapper'>
                                <button className={'equip_btn ' + equipActive} onClick={eqItem}>Equip</button>
                                <button className={'sell_btn ' + sellActive} onClick={sellItem}>Sell</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div className='shop_container'>
                    <div className='wrapper'>
                        <div className='items'>
                            <ul>
                                <ItemComponent data={shopItems[0]} {...props}/>     
                                <ItemComponent data={shopItems[1]} {...props}/>                                      
                                <ItemComponent data={shopItems[2]} {...props}/>                                      
                            </ul>
                        </div>
                        <div className='options'>
                            <button className={'reroll_btn ' + rerollActive} onClick={reroll}>Roll (1)</button>
                            <button className={'buy_btn ' + buyActive()} onClick={buyItem}>Buy</button>
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
    recalculatePlayerStats,
    setDiamonds, 
    setGold 
})(Inventory)