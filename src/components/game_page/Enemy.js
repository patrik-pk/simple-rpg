
import React from "react"

import Stat from "../Stat"

function Enemy(props) {

    // calculate percent of current HP and fill based on it
    const hp_percentage = (props.enemy.currentHp / props.enemy.maxHp) * 100

    const hpStyle = {
        background: "linear-gradient(to right, rgb(220, 0, 0)" 
        + hp_percentage + "%, rgb(75, 0, 0)" 
        + hp_percentage + "%)"
    }

    const critClass = props.enemy.receivedCrit ? " crit" : ""
      
    return (
        <div className="character_container" id="enemy">

            <div className="top_container">

                <img alt="" src={props.enemy.currentEnemy.imgSrc}/>

                <div className="info">
                    <p className="name">{props.enemy.currentEnemy.name}</p>
                    <p className="hp" style={hpStyle}>{props.enemy.currentHp}/{props.enemy.maxHp}</p>
                </div>

                <p className={"floating_damage" + critClass} id="fl_dmg_enemy" style={{ display: props.enemy.damageTaken === "" ? "none" : "block" }}>
                    {props.enemy.damageTaken}
                </p>

                <div className="art_by">
                    <p>Art by:</p>
                    <a href={props.enemy.currentEnemy.artByUrl} target="_blank" rel="noopener noreferrer">{props.enemy.currentEnemy.artBy}</a>
                </div>
                
            </div>

            <div className="stats">
                <div className="wrapper">
                    <ul>
                        <Stat name="HP:" value={props.enemy.maxHp} />
                        <Stat name="Armor:" value={props.enemy.armor} />
                        <Stat name="Strength:" value={props.enemy.damage} />
                        <Stat name="Crit(%):" value={props.enemy.critChance} />
                        <Stat name="M-Dodge(%):" value={Math.round(props.enemy.meleeDodgeChance)} />
                        <Stat name="R-Dodge(%):" value={Math.round(props.enemy.rangedDodgeChance)} />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Enemy