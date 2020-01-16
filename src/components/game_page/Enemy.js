
import React from "react"
import Stat from "../Stat"

function Enemy(props) {

    const hp_percentage = (props.enemy.currentHp / props.enemy.maxHp) * 100

    // HP bar fill
    const hpStyle = {
        background: "linear-gradient(to right, rgb(220, 0, 0)" 
        + hp_percentage + "%, rgb(75, 0, 0)" 
        + hp_percentage + "%)"
    }

    const specie = () => {
        switch(props.enemy.currentEnemy.specie) {
            case "beasts": return "Beast";
            case "dragons": return "Dragon";
            case "insect": return "Insect";
            case "monsters": return "Monster";
            case "reptiles": return "Reptile";
            default: break;
        }
    }

    const difficulty = () => {
        if(props.enemy.type === "Boss") return "Boss"
        else {
            switch(props.enemy.difficulty) {
                case 1: return "Easy"
                case 2: return "Med"
                case 3: return "Hard"
                default: break;
            }
        }
    }
 
    const bossClass = props.enemy.type === "Boss" ? "boss" : ""
    const critClass = props.enemy.receivedCrit ? " crit" : ""
      
    return (
        <div className="character_container" id="enemy">

            <div className="top_container">

                <img alt="" src={props.enemy.currentEnemy.imgSrc}/>

                <div className="info">
                    <p className={"name " + bossClass}>{props.enemy.currentEnemy.name} ({props.enemy.level})</p>
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
                        <Stat name="M-Armor:" value={props.enemy.meleeArmor} enemy={props.enemy} />
                        <Stat name="R-Armor:" value={props.enemy.rangedArmor} enemy={props.enemy} />
                        <Stat name="M-DG(%):" value={Math.round(props.enemy.meleeDodgeChance)} />
                        <Stat name="R-DG(%):" value={Math.round(props.enemy.rangedDodgeChance)} />
                    </ul>

                    <ul>
                        <Stat name="Strength:" value={props.enemy.damage} />
                        <Stat name="Crit(%):" value={props.enemy.critChance} />
                        <Stat name="Diff:" value={difficulty()} />
                        <Stat name="Spec:" value={specie()} />
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Enemy