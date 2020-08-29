import levelTresholds from '../data/levelTresholds'

export default function calculatePlayerStats(equippedItems, currentLevel) {

    const gameFlow = levelTresholds[currentLevel].gameFlow >= 1 ? levelTresholds[currentLevel].gameFlow : 1

    // Variables Declaration

    // Multiply base value for HP * gameFlow (minimum value of 1), 
    // 50% of HP is coming from here, other 50% are coming
    // from equip items (25% necklace, 25% earrings)
    let maxHp = Math.round(200 * gameFlow)
    let armor = 0
    let critChance = 0
    let blockChance = 0
    let meleeDamage = 0
    let rangedDamage = 0

    const bonuses = [
        { name: 'aquatic', value: 0 },
        { name: 'avian', value: 0 },
        { name: 'dinosaur', value: 0 },
        { name: 'insect', value: 0 },
        { name: 'wildlife', value: 0 },
        { name: 'reptile', value: 0 },
    ]

    // Loop Through Equipped Items
    equippedItems.forEach(item => {

        // get statName and statValue
        const { statName, value } = item.stats

        // and assign value to matching stat
        switch (statName) {
            case 'HP': maxHp += value; break;
            case 'Armor': armor += value; break;
            case 'Crit. chance': critChance += value; break;
            case 'Block chance': blockChance += value; break;
            case 'M-DMG': meleeDamage += value; break;
            case 'R-DMG': rangedDamage += value; break;
            default: break;
        }

        // loop through bonuses and if the name matches add the value
        // from itemBonus to bonuses 
        item.bonuses.forEach(itemBonus => {
            bonuses.forEach(bonus => {
                if(itemBonus.name === bonus.name) bonus.value += itemBonus.value
            })
        })
    })

    // Get dominant bonus
    const mappedValues = bonuses.map(bonus => bonus.value)
    const highestIndex = mappedValues.indexOf(Math.max(...mappedValues))
    const classVal = bonuses[highestIndex].name

    // Final Return
    return {
        currentHp: maxHp,
        maxHp,
        armor,
        meleeDamage,
        rangedDamage,
        critChance,
        blockChance,
        bonuses,
        classVal
    }
}