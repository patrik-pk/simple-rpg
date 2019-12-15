
import React from "react"
import Action from "./Action"
import Stat from "../Stat"

import player_img from "../../resources/img/2.jpg"

class Player extends React.Component {

    state = { meleeDodge: 0, rangedDodge: 0 }

    // setState after Enemy fully loads
    componentDidUpdate(prevProps) {
        if (prevProps.enemy.meleeDodgeChance !== this.props.enemy.meleeDodgeChance) {
            this.setState({ 
                meleeDodge: this.props.enemy.meleeDodgeChance ,
                rangedDodge: this.props.enemy.rangedDodgeChance
            })
        }
    }

    render() {
        // calculate percent of current HP and fill based on it
        const hp_percentage = (this.props.player.currentHp / this.props.player.maxHp) * 100
    
        const hpStyle = {
            background: "linear-gradient(to right, rgb(220, 0, 0)" 
            + hp_percentage + "%, rgb(75, 0, 0)" 
            + hp_percentage + "%)"
        }
    
        // Crit
        const critClass = this.props.player.receivedCrit ? " crit" : ""
    
        return(
            <div className="character_container" id="player">
    
                <div className="top_container">
    
                    <img alt="" src={player_img} />
    
                    <div className="info">
                        <p className="name">{this.props.userName}</p>
                        <p className="hp" style={hpStyle}>{this.props.player.currentHp}/{this.props.player.maxHp}</p>
                    </div>
    
                    <p className={"floating_damage" + critClass} id="fl_dmg_player" style={{display: this.props.player.damageTaken === "" ? "none" : "block"}}>
                        {this.props.player.damageTaken}
                    </p>
    
                </div>
    
                <div className="stats">
                    <div className="wrapper">
                        <ul>
                            <Stat name="HP:" value={this.props.player.maxHp} />
                            <Stat name="Armor:" value={this.props.player.armor} />
                            <Stat name="M-DMG:" value={this.props.player.meleeDamage} />
                            <Stat name="R-DMG:" value={this.props.player.rangedDamage} />
                            <Stat name="Crit(%):" value={this.props.player.critChance} />
                            <Stat name="Block(%):" value={this.props.player.blockChance} />
                        </ul>
                        <ul>
                            <Stat name="Beasts:" value={this.props.player.bonuses[0].value} />
                            <Stat name="Dragons:" value={this.props.player.bonuses[1].value} />
                            <Stat name="Insect:" value={this.props.player.bonuses[2].value} />
                            <Stat name="Monsters:" value={this.props.player.bonuses[3].value} />
                            <Stat name="Reptiles:" value={this.props.player.bonuses[4].value} />
                        </ul>
                    </div>
                </div>
    
                <div className="actions" style={{display: this.props.canAttack === true ? "flex" : "none"}}>
                    
                    <div className="melee_column">
                        <Action data={{ type: "melee", strength: "light", text: "LMA" }} dodge={this.state.meleeDodge} gameManager={this.props.gameManager} />
                        <Action data={{ type: "melee", strength: "medium", text: "MMA" }} dodge={this.state.meleeDodge} gameManager={this.props.gameManager} />
                        <Action data={{ type: "melee", strength: "strong", text: "SMA" }} dodge={this.state.meleeDodge} gameManager={this.props.gameManager} />
                    </div>
    
                    <div className="ranged_column">
                        <Action data={{ type: "ranged", strength: "light", text: "LRA" }} dodge={this.state.rangedDodge} gameManager={this.props.gameManager} />
                        <Action data={{ type: "ranged", strength: "medium", text: "MRA" }} dodge={this.state.rangedDodge} gameManager={this.props.gameManager} />
                        <Action data={{ type: "ranged", strength: "strong", text: "SRA" }} dodge={this.state.rangedDodge} gameManager={this.props.gameManager} />
                    </div>
    
                </div>
            </div>
        )
    }
}

export default Player