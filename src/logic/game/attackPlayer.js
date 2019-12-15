
import randomGenerator from "../randomGenerator"
import gameHandler from "../game/gameHandler"

import mainData from "../../data/_mainData"

export default function attackPlayer(props) {

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

    // crit aplies after armor is substracted
    const damageDealtToPlayer = Math.round(((damage * multiplier) - playerArmor) * crit)

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

    if(props.player.currentHp - realDmgDealt <= 0) return gameHandler(props, "Enemy", "End", newHp, damageTaken, null, didReceiveCrit)
    else return gameHandler(props, "Enemy", "Continue", newHp, damageTaken, null, didReceiveCrit)
}