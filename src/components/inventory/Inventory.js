
import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from "./InventoryRow"
import ItemComponent from "./ItemComponent"
import Stat from "../Stat"

import levelTresholds from '../../data/levelTresholds'
import "../../styles/inventory/inventory.css"

function Inventory(props) {

    // Destructure from props
    const { equippedItems, invItems, shopItems } = props.items
    const { currentLevel, experience, gold, diamonds } = props.character
    const { maxHp, armor, meleeDamage, rangedDamage, critChance, blockChance, bonuses } = props.player

    /*componentWillUnmount() {
        props.inventoryOnUnmount()
    }*/

    
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

    // Set active classes
    const equipActive = selectedInvItems.length === 1 ? "active" : "null"
    const sellActive = selectedInvItems.length >= 1 ? "active" : "null"
    const rerollActive = props.currency.diamonds >= 1 ? "active" : "null"

    // If Player has 1 selected shop item, has space in Inventory 
    // and has money to buy that items, return active for buy btn class
    const buyActive = () => {
        if (selectedShopItems.length === 1 && invItems.length <= 35) {
            const selectedItem = selectedShopItems[0]
            if(props.currency.gold >= selectedItem.goldValue) {
                return "active"
            }
        }
        return ''
    }

    // Level progress
    const levelProgress = (experience / levelTresholds[currentLevel].xp * 100).toFixed(2)

    return(
        <div className="inventory">
            
            <div className="top">
                <div className="left">
                    <div className="current_equipment">
                        <div className="wrapper">
                            <InventoryRow itemsProp={getItems(equippedItems, 0, 6)} itemHandleClick={props.itemHandleClick} {...props}/>                                        
                            <InventoryRow itemsProp={getItems(equippedItems, 6, 12)} itemHandleClick={props.itemHandleClick} {...props}/>                                        
                        </div>
                    </div>
                    <div className="player_stats">
                        <div className="wrapper">
                            <h4 className="name">Stats</h4>
                            <hr/>
                            <ul>
                                <Stat name="HP:" value={maxHp}/>
                                <Stat name="Armor:" value={armor}/>
                                <Stat name="M-DMG:" value={meleeDamage}/>
                                <Stat name="R-DMG:" value={rangedDamage}/>
                                <Stat name="Crit(%):" value={critChance}/>
                                <Stat name="Block(%):" value={blockChance} />
                                <br/>
                                <Stat name="Beasts:" value={bonuses[0].value} />
                                <Stat name="Dragons:" value={bonuses[1].value} />
                                <Stat name="Insect:" value={bonuses[2].value} />
                                <Stat name="Monsters:" value={bonuses[3].value} />
                                <Stat name="Reptiles:" value={bonuses[4].value} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="items_container">
                        <div className="wrapper">
                            <div className="items">
                                { mappedRows() }
                            </div>
                        </div>
                        <div className="options">
                            <div className="wrapper">
                                <button className={"equip_btn " + equipActive} onClick={props.equipItem}>Equip</button>
                                <button className={"sell_btn " + sellActive} onClick={props.sellItem}>Sell</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="shop_container">
                    <div className="wrapper">
                        <div className="items">
                            <ul>
                                <ItemComponent data={shopItems[0]} handleClick={props.itemHandleClick} {...props}/>     
                                <ItemComponent data={shopItems[1]} handleClick={props.itemHandleClick} {...props}/>                                      
                                <ItemComponent data={shopItems[2]} handleClick={props.itemHandleClick} {...props}/>                                      
                            </ul>
                        </div>
                        <div className="options">
                            <button className={"reroll_btn " + rerollActive} onClick={props.reroll}>Roll (1)</button>
                            <button className={"buy_btn " + buyActive()} onClick={props.buyItem}>Buy</button>
                        </div>
                    </div>
                </div>
                
                <div className="money_container">
                    <div className="info">
                        <p id="level">Level {currentLevel}</p>
                        <p>{levelProgress}%</p>
                    </div>
                    <div className="money">
                        <p id="gold">Gold: {gold}</p>
                        <p id="diamonds">Diamonds: {diamonds}</p>
                    </div>
                </div>
            </div>

            <Link to="/menu" className="menu_btn back_btn">Back</Link>                        
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

export default connect(mapStateToProps)(Inventory)