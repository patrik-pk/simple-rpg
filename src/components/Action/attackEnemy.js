import { randomGenerator } from '../../shared/utils'
import levelTresholds from '../../data/levelTresholds'


// NOTE: This function has two purposes
// 1) to calculate players damage dealt to enemy, crit chance, and if he dodged
//    in actual game functionality
// 2) to calculate min and max damage that can player deal, without crit
//    for this purpose there is a optional parameter 'specific' which can be 'min' or 'max'
export default function attackEnemy(player, enemy, enemyLevel, typeOfAttack, strengthOfAttack, hitChanceMultiplier, specific) {

  // Calculate values
  const typeOfAttackValues = logic.setTypeOfAttackValues(typeOfAttack, player, enemy)
  const didEnemyDodge = logic.calculateDodge(specific, typeOfAttackValues, hitChanceMultiplier)

  // if enemy dodged, return 'dodged' and don't continue
  if(didEnemyDodge) return { p_dmgDealt: 'dodged', p_didCrit: false }

  const strengthOfAttackMultiplier = logic.setStrengthOfAttackMultiplier(specific, strengthOfAttack)
  const bonusMultiplier = logic.setBonusMultiplier(enemy.enemyType.specie, player.bonuses)
  const crit = logic.calculateCrit(specific, player.critChance)
  const damageDealt = logic.calculateDamageDealt(strengthOfAttackMultiplier, typeOfAttackValues, bonusMultiplier, crit, enemyLevel)

  // Final return
  if(specific) return damageDealt
  else return { p_dmgDealt: damageDealt, p_didCrit: crit.didCrit }
}

// Logic
const logic = {

  // Return damage, dodge and armor based on typeOfAttack
  setTypeOfAttackValues: (typeOfAttack, player, enemy) => {
    if (typeOfAttack === 'melee') return {
      dmg: player.meleeDamage,
      dodge: enemy.meleeDodgeChance,
      armor: enemy.meleeArmor
    }
    else return {
      dmg: player.rangedDamage,
      dodge: enemy.rangedDodgeChance,
      armor: enemy.rangedArmor
    }
  },

  // Calculate if enemy dodged based on his dodgeChance, return true or false
  calculateDodge: (specific, typeOfAttackValues, hitChanceMultiplier) => {

    // if there is a specific index, don't calculate it
    if (specific) return

    // Enemy dodge chance
    let dodgeChance = typeOfAttackValues.dodge

    // Mulitply dodgeChance by hitChanceMultiplier, which is a value to make it easier to
    // hit for light attack and harder for strong attack
    // e.g  50% dodge chance * 0.2 (hitChanceMultiplier for light attack) => 10% real chance for enemy to dodge
    // e.g  50% dodge chance * 1.8 (hitChanceMultiplier for strong attack) => 90% real chance for enemy to dodge
    dodgeChance = (dodgeChance * hitChanceMultiplier).toFixed(2)

    // Return true / false based on random Number
    return dodgeChance > randomGenerator(0, 99) ? true : false
  },

  // Return random number based on strengthOfAttack and specific index
  setStrengthOfAttackMultiplier: (specific, strengthOfAttack) => {

    // get specific index, if there is one (to calculate min and max damage)
    const specificIndex = () => {
      if (specific === 'min') return 0
      if (specific === 'max') return 1
    }

    // random damage dispersion for low, medium and high, first value = min, last one = max
    const disp = [
      [70, 90],
      [90, 110],
      [110, 130],
    ]

    // if there is a specific index, return min/max based on the specific index,
    // else return random number between min and max * 0.01
    const finalReturn = i => specific ? disp[i][specificIndex()] * 0.01 : randomGenerator(disp[i][0], disp[i][1], 0.01)

    switch (strengthOfAttack) {
      case 'light': return finalReturn(0)
      case 'medium': return finalReturn(1)
      case 'strong': return finalReturn(2)
      default: break
    }
  },

  // Set multiplier based on enemy specie and players bonuses against that specie
  setBonusMultiplier: (specie, bonuses) => {
    const matchingBonus = bonuses.find(bonus => bonus.name === specie)
    return (matchingBonus.value * 0.01) + 1
  },

  // Calculate if player crit based on his critChance and return object with boolean and multiplier
  calculateCrit: (specific, critChance) => {
    // if there is a specific index, just return value of 1
    if (specific) return { value: 1 }

    return critChance > randomGenerator(0, 99)
      ? { didCrit: true, value: 1.5 }
      : { didCrit: false, value: 1 }
  },

  // Calculate damage dealt
  calculateDamageDealt: (strengthOfAttackMultiplier, typeOfAttackValues, bonusMultiplier, crit, enemyLevel) => {

    // minimum damage that characters does when armor is too high (base * strenghtOffAttackMultiplier * gameFlow)
    const gameFlow = levelTresholds[enemyLevel <= 30 ? enemyLevel : 30].gameFlow
    const minDmg = 100 * strengthOfAttackMultiplier * gameFlow

    // calculate damage, substract it by enemy armor, then multiply by crit value
    let dmgDealt = (typeOfAttackValues.dmg * strengthOfAttackMultiplier * bonusMultiplier)
    dmgDealt -= typeOfAttackValues.armor
    dmgDealt *= crit.value

    // if dmgDealt is less than minDmg, set damage dealt to random * minDmg, or let it be as it is
    dmgDealt = dmgDealt < minDmg ? minDmg : dmgDealt

    // return rounded dmgDealt
    return Math.round(dmgDealt)
  }
}
