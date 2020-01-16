
import randomGenerator from "../randomGenerator"
import gameHandler from "../game/gameHandler"

import mainData from "../../data/_mainData"

export default function attackPlayer(props) {

    const gameFlowFc = () => {
        if(props.level.currentLevel >= 5) {
            return props.level.gameFlow
        } else return 1
    }
    // set gameFlow to minimum value of 1
    // this is used just for damage so that the damage isn't too low
    const gameFlow = gameFlowFc()
        
    // damage
    const damage = props.enemy.damage

    // multiplier
    const mult = mainData.enemyBase.dispersion.dmgMult
    const multiplier = randomGenerator(mult.min, mult.max, mult.perc) 

    // crit
    const critFc = () => {
        const critMultiplier = mainData.enemyBase.critMult
        const critChance = props.enemy.critChance
        const random = randomGenerator(0, 100, 1)

        if (critChance > random) return critMultiplier
        else return 1
    }

    const crit = critFc()

    const playerArmor = props.player.armor

    // calculate damage and round to a whole number
    const minDmgBase = mainData.global.minDmg
    const md = mainData.global.minDmgDisp // min dmg dispersion
    const minDmg = minDmgBase * gameFlow

    let damageDealtToPlayer = (damage * multiplier) - playerArmor
    // if damage dealt is less than minDmg => set damage dealt to random * minDmg otherwise keep it the same
    const isLessThanMin = damageDealtToPlayer < minDmg

    damageDealtToPlayer = isLessThanMin ? minDmg * randomGenerator(md.min, md.max, md.perc) : damageDealtToPlayer
    damageDealtToPlayer *= crit // then apply crit
    damageDealtToPlayer = Math.round(damageDealtToPlayer) // and round to a whole number

    const didBlock = () => {
        const blockChance = props.player.blockChance
        const random = randomGenerator(0, 100, 1)

        if (blockChance > random) return true 
        else return false
    }

    const blocked = didBlock()

    const receivedCrit = () => {
        if (crit !== 1 && blocked === false) {
            return true
        }
        else return false
    }

    const didReceiveCrit = receivedCrit()

    const currentHp = props.player.currentHp
    const newHp = blocked ? currentHp : currentHp - damageDealtToPlayer
    const damageTaken = blocked ? "Blocked" : damageDealtToPlayer

    const realDmgDealt = blocked ? 0 : damageDealtToPlayer
    
    // Handle
    if(props.player.currentHp - realDmgDealt <= 0) return gameHandler(props, "Enemy", "End", newHp, damageTaken, didReceiveCrit)
    else return gameHandler(props, "Enemy", "Continue", newHp, damageTaken, didReceiveCrit)
}