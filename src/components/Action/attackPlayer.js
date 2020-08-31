import { randomGenerator } from '../../shared/utils'

export default function attackPlayer(player, enemy, character) {

    // If player blocked the attack, return 'blocked' and don't continue
    if (player.blockChance > randomGenerator(0, 99)) return { e_dmgDealt: 'blocked', e_didCrit: false }

    // Set gameFlow based on player level with minimum value of 1
    const gameFlow = character.gameFlow >= 5 ? character.gameFlow : 1

    const didEnemyCrit = logic.calculateCrit(enemy.critChance)
    const damageDealt = logic.calculateDamageDealt(enemy.damage, player.armor, didEnemyCrit.value, gameFlow)

    // Return damageDealt along with didCrit boolean
    return { e_dmgDealt: damageDealt, e_didCrit: didEnemyCrit.didCrit }
}

// Logic
const logic = {

    // Calculate if enemy crit based on his critChance and return object with boolean and multiplier
    calculateCrit: critChance => {
        if (critChance > randomGenerator(0, 99)) return { didCrit: true, value: 1.5 }
        else return { didCrit: false, value: 1 }
    },

    // Calculate damage dealt
    calculateDamageDealt: (damage, armor, critValue, gameFlow) => {

        // min dmg, if armor is too high
        const minDmg = 30 * gameFlow

        // calculate dmg dealt, if it is higher than min dmg, 
        // keep it, else set it to min dmg, then randomize it
        let damageDealt = (damage - armor) * critValue
        damageDealt = damageDealt < minDmg ? minDmg : damageDealt
        damageDealt *= randomGenerator(90, 110, 0.01)

        // return rounded dmg
        return Math.round(damageDealt)
    }
}