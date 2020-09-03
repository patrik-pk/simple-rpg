
const rarities = {

    // Craftable Items (bonus amount is not being used, becase bonuses are already declared for these items)
    mythic: { rarity: 'Mythic', rarStatMult: 2, rarValMult: 4 },    
    aquatic: { rarity: 'Aquatic', rarStatMult: 1.8, rarValMult: 3 },    
    avian: { rarity: 'Avian', rarStatMult: 1.8, rarValMult: 3 },    
    dinosaur: { rarity: 'Dinosaur', rarStatMult: 1.8, rarValMult: 3 },    
    insect: { rarity: 'Insect', rarStatMult: 1.8, rarValMult: 3 },    
    reptile: { rarity: 'Reptile', rarStatMult: 1.8, rarValMult: 3 },    
    wildlife: { rarity: 'Wildlife', rarStatMult: 1.8, rarValMult: 3 },    

    // Normal Items
    legendary: { rarity: 'Legendary', rarStatMult: 1.7, rarValMult: 2.5, bonusAmount: 5 },
    epic: { rarity: 'Epic', rarStatMult: 1.45, rarValMult: 2, bonusAmount: 4 },
    rare: { rarity: 'Rare', rarStatMult: 1.25, rarValMult: 1.6, bonusAmount: 3 },
    uncommon: { rarity: 'Uncommon', rarStatMult: 1.1, rarValMult: 1.3, bonusAmount: 2 },
    common: { rarity: 'Common', rarStatMult: 1, rarValMult: 1, bonusAmount: 1 }
}

export default rarities