
import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from "./InventoryRow"
import ItemComponent from "./ItemComponent"
import Stat from "../Stat"

import "../../styles/inventory/inventory.css"

class Inventory extends React.Component {

    componentWillUnmount() {
        this.props.inventoryOnUnmount()
    }

    render() {
        const equippedItems = this.props.equippedItems
        const invItems = this.props.invItems
    
        // Slice item's into a 6 item array and put them into the InventoryRow Component
        const getItems = (type, min, max) => {
            if(type === "equipped") return equippedItems.slice(min, max) 
            else if (type === "inventory") return invItems.slice(min, max)
        }

        // Custom map for creating 6 InventoryRow components
        const mappedRows = () => {
            const mapped = []

            for(let i = 0; i < 6; i++) {
                mapped.push(<InventoryRow key={i} items={getItems("inventory", i * 6, (i * 6) + 6)} itemHandleClick={this.props.itemHandleClick} {...this.props} />)
            }

            return mapped
        }
        mappedRows()
    
        const selectedInvItems = this.props.invItems.filter(item => item.isSelected)
        const selectedShopItems = this.props.shopItems.filter(item => item.isSelected)

        const equipActive = selectedInvItems.length === 1 ? "active" : "null"
        const sellActive = selectedInvItems.length >= 1 ? "active" : "null"
        const rerollActive = this.props.currency.diamonds >= 1 ? "active" : "null"

        const buyActive = () => {
            if (selectedShopItems.length === 1 && invItems.length <= 35) {
                const selectedItem = selectedShopItems[0]
                if(this.props.currency.gold >= selectedItem.goldValue) {
                    return "active"
                } else return ""
            } else return ""
        }

        const level = this.props.currentLevel
        const levelProgress = (this.props.experience / this.props.levelTresholds[level].xp * 100).toFixed(2)
    
        return(
            <div className="inventory">
                <div className="top">
                    <div className="left">
                        <div className="current_equipment">
                            <div className="wrapper">
                                <InventoryRow items={getItems("equipped", 0, 6)} itemHandleClick={this.props.itemHandleClick} {...this.props}/>                                        
                                <InventoryRow items={getItems("equipped", 6, 12)} itemHandleClick={this.props.itemHandleClick} {...this.props}/>                                        
                            </div>
                        </div>
                        <div className="player_stats">
                            <div className="wrapper">
                                <h4 className="name">Stats</h4>
                                <hr/>
                                <ul>
                                    <Stat name="HP:" value={this.props.player.maxHp}/>
                                    <Stat name="Armor:" value={this.props.player.armor}/>
                                    <Stat name="M-DMG:" value={this.props.player.meleeDamage}/>
                                    <Stat name="R-DMG:" value={this.props.player.rangedDamage}/>
                                    <Stat name="Crit(%):" value={this.props.player.critChance}/>
                                    <Stat name="Block(%):" value={this.props.player.blockChance} />
                                    <br/>
                                    <Stat name="Beasts:" value={this.props.player.bonuses[0].value} />
                                    <Stat name="Dragons:" value={this.props.player.bonuses[1].value} />
                                    <Stat name="Insect:" value={this.props.player.bonuses[2].value} />
                                    <Stat name="Monsters:" value={this.props.player.bonuses[3].value} />
                                    <Stat name="Reptiles:" value={this.props.player.bonuses[4].value} />
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
                                    <button className={"equip_btn " + equipActive} onClick={this.props.equipItem}>Equip</button>
                                    <button className={"sell_btn " + sellActive} onClick={this.props.sellItem}>Sell</button>
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
                                    <ItemComponent data={this.props.shopItems[0]} handleClick={this.props.itemHandleClick} {...this.props}/>     
                                    <ItemComponent data={this.props.shopItems[1]} handleClick={this.props.itemHandleClick} {...this.props}/>                                      
                                    <ItemComponent data={this.props.shopItems[2]} handleClick={this.props.itemHandleClick} {...this.props}/>                                      
                                </ul>
                            </div>
                            <div className="options">
                                <button className={"reroll_btn " + rerollActive} onClick={this.props.reroll}>Roll (1)</button>
                                <button className={"buy_btn " + buyActive()} onClick={this.props.buyItem}>Buy</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="money_container">
                        <div className="info">
                            <p id="level">Level {level}</p>
                            <p>{levelProgress}%</p>
                        </div>
                        <div className="money">
                            <p id="gold">Gold: {this.props.currency.gold}</p>
                            <p id="diamonds">Diamonds: {this.props.currency.diamonds}</p>
                        </div>
                    </div>
                </div>

                <Link to="/menu" className="menu_btn back_btn">Back</Link>                        
            </div>
        )
    }
}

Inventory.propTypes = {
    currentLevel: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    experience: state.character.experience
})

export default connect(mapStateToProps)(Inventory)