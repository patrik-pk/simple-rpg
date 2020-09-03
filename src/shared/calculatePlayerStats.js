import levelTresholds from './data/levelTresholds'

export default (equippedItems, currentLevel) => {

    const gameFlow = levelTresholds[currentLevel].gameFlow >= 1 
        ? levelTresholds[currentLevel].gameFlow 
        : 1

    // Note: 50% hp comes from here, 50% comes from items - 25% necklace, 25% earrings
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
        { name: 'reptile', value: 0 },
        { name: 'wildlife', value: 0 },
    ]

    equippedItems.forEach(item => {
        const { statName, value } = item.stats
        switch (statName) {
            case 'HP': maxHp += value; break;
            case 'Armor': armor += value; break;
            case 'Crit. chance': critChance += value; break;
            case 'Block chance': blockChance += value; break;
            case 'M-DMG': meleeDamage += value; break;
            case 'R-DMG': rangedDamage += value; break;
            default: break;
        }

        item.bonuses.forEach(itemBonus => {
            bonuses.forEach(bonus => itemBonus.name === bonus.name 
                ? bonus.value += itemBonus.value 
                : null
            )
        })
    })

    // get the highest bonus
    const mappedValues = bonuses.map(bonus => bonus.value)
    const highestIndex = mappedValues.indexOf(Math.max(...mappedValues))
    const classVal = bonuses[highestIndex].name

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