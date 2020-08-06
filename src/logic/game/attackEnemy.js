import randomGenerator from "../randomGenerator"
import gameHandler from "../game/gameHandler"
import md from "../../data/_mainData"

export default function attackEnemy(player, enemy, typeOfAttack, strengthOfAttack) {

  // Based on typeOfAttack (melee / ranged) return weapon dmg, enemy dodge and enemy armor
  const typeOfAtt = (() => {
    switch (typeOfAttack) {
      case "melee": return { 
        dmg: player.meleeDamage, 
        dodge: enemy.meleeDodgeChance, 
        armor: enemy.meleeArmor 
      }
      case "ranged": return { 
        dmg: player.rangedDamage, 
        dodge: enemy.rangedDodgeChance, 
        armor: enemy.rangedArmor 
      }
      default: break;
    }
  })()

  // Based on strengthOfAttack (light / medium / ranged) return dmg and hitChance
  const strengthOfAtt = (() => {
    let dmg
    switch (strengthOfAttack) {
      case "light": dmg = md.playerBase.attackTypes.damage.light; return {
        dmg: randomGenerator(dmg.min, dmg.max, dmg.perc),
        hitChance: md.playerBase.attackTypes.hitChance.light
      }
      case "medium": dmg = md.playerBase.attackTypes.damage.medium; return {
        dmg: randomGenerator(dmg.min, dmg.max, dmg.perc),
        hitChance: md.playerBase.attackTypes.hitChance.medium
      }
      case "strong": dmg = md.playerBase.attackTypes.damage.strong; return {
        dmg: randomGenerator(dmg.min, dmg.max, dmg.perc),
        hitChance: md.playerBase.attackTypes.hitChance.strong
      }
      default: break;
    }
  })()

  // Calculate Enemy dodge based on his dodgeChance, return true or false
  const dodged = (() => {
    // Enemy dodge chance
    let dodgeChance = typeOfAtt.dodge
    // Mulitply dodgeChance by strengthOfAtt hitChance, which is value to make it easier to
    // hit for light attack and harder for strong attack, you can check the values in mainData
    // e.g  50% dodge chance * 0.2 light attack hit Chance => 10% real chance for enemy to dodge
    // e.g  50% dodge chance * 1.8 strong attack hit Chance => 90% real chance for enemy to dodge
    dodgeChance = (dodgeChance * strengthOfAtt.hitChance).toFixed(2)

    // Finally return true / false based on comparing to random value
    const random = randomGenerator(0, 100, 1)
    return dodgeChance > random ? true : false
  })()

  // If enemy dodged, return 'dodged' and don't continue
  if(dodged) return { dmgDealt: 'dodged', didCrit: null }

  // Specie bonus multiplier
  const bonusMultiplier = (() => {
    const specie = enemy.currentEnemy.specie
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
    const critMultiplier = md.playerBase.critMult
    const critChance = player.critChance
    const random = randomGenerator(0, 100, 1)

    if(critChance > random) return { didCrit: true, value: critMultiplier }
    else return { didCrit: false, value: 1 }
  })()

  // Calculate Damage Dealt
  const damageDealt = (() => {
    const minDmg = md.global.minDmg // min DMG base that characters does when armor is too high
    const min_dmg_disp = md.global.minDmgDisp // min dmg dispersion - to randomize the dmg, when armor si too high

    // Damage Dealt = (TypeOfAttack DMG (coming from weapon Melee / Ranged) 
    // * StrengthOfAttack Multiplier (light/medium/strong) 
    // * Specie Bonus Multiplier) - Enemy Armor
    let dmgDealt = (typeOfAtt.dmg * strengthOfAtt.dmg * bonusMultiplier) - typeOfAtt.armor
    // apply crit to dmgDealt substracted by Enemy Armor
    dmgDealt *= crit.value
    // if dmgDealt is less than minDmg, set damage dealt to random * minDmg, or let it be as it is
    dmgDealt = dmgDealt < minDmg ? minDmg * randomGenerator(min_dmg_disp.min, min_dmg_disp.max, min_dmg_disp.perc) : dmgDealt
    // finally round dmgDealt to a whole number
    dmgDealt = Math.round(dmgDealt)
    // and return it
    return dmgDealt
  })()

  // Final return
  return {
    dmgDealt: damageDealt,
    didCrit: crit.didCrit
  }
}
