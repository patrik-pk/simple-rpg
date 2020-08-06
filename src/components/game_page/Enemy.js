import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Stat from "../Stat"

function Enemy(props) {
    const reduxEnemy = props.reduxEnemy

    const hp_percentage = (reduxEnemy.currentHp / reduxEnemy.maxHp) * 100

    // HP bar fill
    const hpStyle = {
        background: "linear-gradient(to right, rgb(220, 0, 0)" 
        + hp_percentage + "%, rgb(75, 0, 0)" 
        + hp_percentage + "%)"
    }

    const specie = () => {
        switch(reduxEnemy.currentEnemy.specie) {
            case "beasts": return "Beast";
            case "dragons": return "Dragon";
            case "insect": return "Insect";
            case "monsters": return "Monster";
            case "reptiles": return "Reptile";
            default: break;
        }
    }

    const difficulty = () => {
        if(reduxEnemy.type === "Boss") return "Boss"
        else {
            switch(reduxEnemy.difficulty) {
                case 1: return "Easy"
                case 2: return "Med"
                case 3: return "Hard"
                default: break;
            }
        }
    }
 
    const bossClass = reduxEnemy.type === "Boss" ? "boss" : ""
    const critClass = reduxEnemy.receivedCrit ? " crit" : ""
      
    return (
        <div className="character_container" id="enemy">

            {/* Enemy Top */}
            <div className="top_container">

                {/* Image */}
                <img alt="" src={reduxEnemy.currentEnemy.imgSrc}/>

                {/* Info - name, level, hp */}
                <div className="info">
                    <p className={"name " + bossClass}>{reduxEnemy.currentEnemy.name} ({reduxEnemy.level})</p>
                    <p className="hp" style={hpStyle}>{reduxEnemy.currentHp}/{reduxEnemy.maxHp}</p>
                </div>

                {/* Floating Damage */}
                <p className={"floating_damage" + critClass} id="fl_dmg_enemy" style={{ display: reduxEnemy.damageTaken === "" ? "none" : "block" }}>
                    {reduxEnemy.damageTaken}
                </p>

                {/* Art By */}
                <div className="art_by">
                    <p>Art by:</p>
                    <a href={reduxEnemy.currentEnemy.artByUrl} target="_blank" rel="noopener noreferrer">{reduxEnemy.currentEnemy.artBy}</a>
                </div>
                
            </div>

            {/* Enemy Bottom - Stats */}
            <div className="stats">
                <div className="wrapper">
                    <ul>
                        <Stat name="HP:" value={reduxEnemy.maxHp} />
                        <Stat name="M-Armor:" value={reduxEnemy.meleeArmor} enemy={reduxEnemy} />
                        <Stat name="R-Armor:" value={reduxEnemy.rangedArmor} enemy={reduxEnemy} />
                        <Stat name="M-DG(%):" value={Math.round(reduxEnemy.meleeDodgeChance)} />
                        <Stat name="R-DG(%):" value={Math.round(reduxEnemy.rangedDodgeChance)} />
                    </ul>

                    <ul>
                        <Stat name="Strength:" value={reduxEnemy.damage} />
                        <Stat name="Crit(%):" value={reduxEnemy.critChance} />
                        <Stat name="Diff:" value={difficulty()} />
                        <Stat name="Spec:" value={specie()} />
                    </ul>

                </div>
            </div>

        </div>
    )
}

Enemy.propTypes = {
    reduxEnemy: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    reduxEnemy: state.enemy
})

export default connect(mapStateToProps)(Enemy)