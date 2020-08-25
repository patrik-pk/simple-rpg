
export default function calculatePlayerStats(equippedItems) {

    // Variables Declaration
    let maxHp = 0
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

    // Final Return
    return {
        maxHp,
        armor,
        meleeDamage,
        rangedDamage,
        critChance,
        blockChance,
        bonuses
    }
}