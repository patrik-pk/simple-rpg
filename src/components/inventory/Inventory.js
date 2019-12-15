
import React from "react"
import { Link } from "react-router-dom"

import InventoryRow from "./InventoryRow"
import ItemComponent from "./ItemComponent"
import Stat from "../Stat"

import styles from "../../data/styles"
import "../../styles/inventory/inventory.css"

class Inventory extends React.Component {

    componentWillUnmount() {
        this.props.inventoryOnUnmount()
    }

    render() {
        const equippedItems = this.props.equippedItems
        const invItems = this.props.invItems
    
        const getItems = (type, min, max) => {
            if(type === "equipped") return equippedItems.slice(min, max) 
            else if (type === "inventory") return invItems.slice(min, max)
        }
    
        const selectedInvItems = this.props.invItems.filter(item => item.isSelected)

        const activeBtnStyle = { backgroundColor: "black", color: "white" }

        const equipStyle = selectedInvItems.length === 1 ? activeBtnStyle : null
        const sellStyle = selectedInvItems.length >= 1 ? activeBtnStyle : null

        // TODO: map shop items

        const selectedShopItems = this.props.shopItems.filter(item => item.isSelected)

        const rerollStyle = this.props.currency.diamonds >= 1 ? activeBtnStyle : null
        const buyStyle = selectedShopItems.length === 1 && invItems.length <= 35 ? activeBtnStyle : null
    
        return(
            <section className="inventory_section" style={styles.bg_style}>
                <div className="dark_overlay"></div>
                <div className="container">
                    <div className="box">
                        <div className="content" id="inventory">
                            <div className="inv">
                                <div className="current_equipment">
                                    <div className="wrapper">
                                        <InventoryRow items={getItems("equipped", 0, 6)} itemHandleClick={this.props.itemHandleClick}/>                                        
                                        <InventoryRow items={getItems("equipped", 6, 12)} itemHandleClick={this.props.itemHandleClick}/>                                        
                                    </div>
                                </div>
                                <div className="player_stats">
                                    <div className="wrapper">
                                        <h4 className="name">Account name</h4>
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
                                <div className="items_container">
                                    <div className="wrapper">
                                        <div className="items">
                                            <InventoryRow items={getItems("inventory", 0, 6)} itemHandleClick={this.props.itemHandleClick}/>
                                            <InventoryRow items={getItems("inventory", 6, 12)} itemHandleClick={this.props.itemHandleClick}/>
                                            <InventoryRow items={getItems("inventory", 12, 18)} itemHandleClick={this.props.itemHandleClick}/>
                                            <InventoryRow items={getItems("inventory", 18, 24)} itemHandleClick={this.props.itemHandleClick}/>
                                            <InventoryRow items={getItems("inventory", 24, 30)} itemHandleClick={this.props.itemHandleClick}/>
                                            <InventoryRow items={getItems("inventory", 30, 36)} itemHandleClick={this.props.itemHandleClick}/>
                                        </div>
                                    </div>
                                    <div className="options">
                                        <div className="wrapper">
                                            <button className="equip_btn" style={equipStyle} onClick={this.props.equipItem}>Equip</button>
                                            <button className="sell_btn" style={sellStyle} onClick={this.props.sellItem}>Sell</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_container">
                                <div className="wrapper">
                                    <div className="items">
                                        <ul>
                                            <ItemComponent data={this.props.shopItems[0]} handleClick={this.props.itemHandleClick} />     
                                            <ItemComponent data={this.props.shopItems[1]} handleClick={this.props.itemHandleClick} />                                      
                                            <ItemComponent data={this.props.shopItems[2]} handleClick={this.props.itemHandleClick} />                                      
                                        </ul>
                                    </div>
                                    <div className="options">
                                        <button onClick={this.props.reroll} style={rerollStyle}>Reroll (1)</button>
                                        <button onClick={this.props.buyItem} style={buyStyle}>Buy</button>
                                    </div>
                                </div>
                            </div>
                            <div className="money_container">
                                <p id="gold">Gold: {this.props.currency.gold}</p>
                                <p id="diamonds">Diamonds: {this.props.currency.diamonds}</p>
                            </div>
                            <Link to="/menu" className="menu_btn back_btn">Back</Link>                        
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Inventory