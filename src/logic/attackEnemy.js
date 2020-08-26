import randomGenerator from './randomGenerator'
import levelTresholds from '../data/levelTresholds'

// This function is used for to usecases
// 1) calculating players damage to enemy, crit chance, and if he dodged
//    in actual game functionality
// 2) calculating min and max damage that can player deal, without crit
//    for this purpose there is a optional parameter 'specific' which can be 'min' or 'max'
export default function attackEnemy(player, enemy, enemyLevel, typeOfAttack, strengthOfAttack, hitChanceMult, specific) {

  // Based on typeOfAttack (melee / ranged) return weapon dmg, enemy dodge and enemy armor
  const typeOfAtt = (() => {
    switch (typeOfAttack) {
      case 'melee': return { 
        dmg: player.meleeDamage, 
        dodge: enemy.meleeDodgeChance, 
        armor: enemy.meleeArmor 
      }
      case 'ranged': return { 
        dmg: player.rangedDamage, 
        dodge: enemy.rangedDodgeChance, 
        armor: enemy.rangedArmor 
      }
      default: break;
    }
  })()

  // Based on strengthOfAttack (light / medium / ranged) return dmg
  const strengthOfAtt = (() => {

    // get specific index
    const specificIndex = () => {
      if(specific === 'min') return 0
      if(specific === 'max') return 1
    }

    // dispersions for random dmg, first value = min, last one = max
    const disp = [
      [ 70, 90 ],
      [ 90, 110 ],
      [ 110, 130 ],
    ]

    // if there is a specific, return min/max dmg, else return random between min and max
    const finalReturn = i => specific ? disp[i][specificIndex()] * 0.01 : randomGenerator(disp[i][0], disp[i][1], 0.01)

    switch (strengthOfAttack) {
      case 'light': 
        return finalReturn(0)
      case 'medium': 
        return finalReturn(1)
      case 'strong': 
        return finalReturn(2)
      default: break
    }
  })()

  // Calculate Enemy dodge based on his dodgeChance, return true or false
  const dodged = (() => {
    if(specific) return
    // Enemy dodge chance
    let dodgeChance = typeOfAtt.dodge
    // Mulitply dodgeChance by hitChanceMutl, which is value to make it easier to
    // hit for light attack and harder for strong attack
    // e.g  50% dodge chance * 0.2 light attack hit Chance => 10% real chance for enemy to dodge
    // e.g  50% dodge chance * 1.8 strong attack hit Chance => 90% real chance for enemy to dodge
    dodgeChance = (dodgeChance * hitChanceMult).toFixed(2)

    // Finally return true / false based on comparing to random value
    const random = randomGenerator(0, 100, 1)
    return dodgeChance > random ? true : false
  })()

  // If enemy dodged, return 'dodged' and don't continue
  if(dodged) return { p_dmgDealt: 'dodged', p_didCrit: false }

  // Specie bonus multiplier
  const bonusMultiplier = (() => {
    const specie = enemy.enemyType.specie
    const playerBonuses = player.bonuses
    let bonusValue = 1

    playerBonuses.forEach(bonus => {
      if(bonus.name === specie) {
        bonusValue = 1 + bonus.value * 0.01
      }
    })
    return bonusValue
  })()

  // Crit - calculate crit based on critChance and return object with multiplier value & didCrit boolean
  const crit = (() => {
    if(specific) return { value: 1 }

    const critChance = player.critChance
    const random = randomGenerator(0, 100, 1)

    if(critChance > random) return { didCrit: true, value: 1.5 }
    else return { didCrit: false, value: 1 }
  })()

  // Calculate Damage Dealt
  const damageDealt = (() => {

    // min DMG base that characters does when armor is too high
    const minDmg = 100 * strengthOfAtt * levelTresholds[enemyLevel <= 30 ? enemyLevel : 30].gameFlow

    // Damage Dealt = (TypeOfAttack DMG (coming from weapon Melee / Ranged) 
    // * StrengthOfAttack Multiplier (light/medium/strong) 
    // * Specie Bonus Multiplier) - Enemy Armor
    let dmgDealt = (typeOfAtt.dmg * strengthOfAtt * bonusMultiplier) - typeOfAtt.armor

    // apply crit to dmgDealt substracted by Enemy Armor
    dmgDealt *= crit.value

    // if dmgDealt is less than minDmg, set damage dealt to random * minDmg, or let it be as it is
    dmgDealt = dmgDealt < minDmg ? minDmg : dmgDealt

    // finally round dmgDealt to a whole number
    dmgDealt = Math.round(dmgDealt)

    // and return it
    return dmgDealt
  })()

  // Final return
  if(specific) return damageDealt
  else return {
    p_dmgDealt: damageDealt,
    p_didCrit: crit.didCrit
  }
}
