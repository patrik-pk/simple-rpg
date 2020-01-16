
export default function calculatePlayerStats(equippedItems) {

    let HP = 0
    let armor = 0
    let crit = 0
    let block = 0
    let meleeDMG = 0
    let rangedDMG = 0

    let beasts = { name: "beasts", value: 0 }
    let dragons = { name: "dragons", value: 0 }
    let insect = { name: "insect", value: 0 }
    let monsters = { name: "monsters", value: 0 }
    let reptiles = { name: "reptiles", value: 0 }

    // loop through equipped items
    for (let i = 0; i < equippedItems.length; i++) {
        const statName = equippedItems[i].stats.statName
        const statValue = equippedItems[i].stats.value

        // and asign stats based on item stats
        switch (statName) {
            case "HP": HP += statValue; break;
            case "Armor": armor += statValue; break;
            case "Crit. chance": crit += statValue; break;
            case "Block chance": block += statValue; break;
            case "M-DMG": meleeDMG += statValue; break;
            case "R-DMG": rangedDMG += statValue; break;
            default: break;
        }

        // if item has bonuses
        if(equippedItems[i].bonuses !== null) {
            const bonuses = equippedItems[i].bonuses
           
            // loop through them
            for(let x = 0; x < bonuses.length; x++) {
                const bonusName = bonuses[x].effectiveAgainst
                const bonusValue = bonuses[x].value

                // and assign them to stats
                switch (bonusName) {
                    case "beasts": beasts.value += bonusValue; break;
                    case "dragons": dragons.value += bonusValue; break;
                    case "insect": insect.value += bonusValue; break;
                    case "monsters": monsters.value += bonusValue; break;
                    case "reptiles": reptiles.value += bonusValue; break;
                    default: break;
                }
            }
        }      
    }


    return {
        currentHp: HP,
        maxHp: HP,
        armor: armor,
        meleeDamage: meleeDMG,
        rangedDamage: rangedDMG,
        critChance: crit,
        blockChance: block,
        bonuses: [
            beasts,
            dragons,
            insect,
            monsters,
            reptiles
        ],
        damageTaken: "",
        receivedCrit: false
    }
}