import randomGenerator from './randomGenerator'

export default function attackPlayer(player, enemy, character) {

    // Did Player block?
    const blocked = (() => {
        const blockChance = player.blockChance
        const random = randomGenerator(0, 100, 1)

        return blockChance > random ? true : false
    })()

    // If he did, return 'blocked' and don't continue
    if(blocked) return { e_dmgDealt: 'blocked', e_didCrit: false }

    // Set gameFlow to minimum value of 1,
    // this is used just for damage, so that the damage isn't too low
    const gameFlow = (() => {
        if(character.currentLevel >= 5) {
            return character.gameFlow
        } else return 1
    })()
        

    // Crit Multiplier - if enemy crits return multiplier, if not, return 1
    const crit = (() => {
        const critChance = enemy.critChance
        const random = randomGenerator(0, 100, 1)

        if (critChance > random) return { didCrit: true, value: 2 }
        else return { didCrit: false, value: 1 }
    })()

    // Calculate Damage Dealt
    const dmgDealt = (() => {

        // damage
        const damage = enemy.damage

        // create multiplier to randomize dmg (0.9 - 1.1)
        const multiplier = randomGenerator(90, 110, 0.01) 

        // player armor
        const playerArmor = player.armor

        // min dmg, if armor is too high
        const minDmg = 30 * randomGenerator(85, 115, 0.01) * gameFlow

        // calculate dmg dealt
        let dmg = (damage * multiplier * crit.value) - playerArmor

        // if dmg dealt is less than minDmg, set dmg to minDmg * random multiplier,
        // if it isn't, keep it as it is
        dmg = dmg < minDmg ? minDmg : dmg

        // finally return rounded dmg
        return Math.round(dmg)

    })()

    // Final return
    return {
        e_dmgDealt: dmgDealt,
        e_didCrit: crit.didCrit
    }
}