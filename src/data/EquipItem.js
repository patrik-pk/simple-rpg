import equipIcons from './icons/equipIcons'

class EquipItem {
    constructor(
        destination = 'Equipped',
        key,
        name = 'Helmet',
        rarity = 'Common',
        icon = equipIcons.Helmet,
        stats = { statName: 'Armor', value: 7 },
        bonuses = [
            { name: 'avian', value: 0 },
            { name: 'dinosaur', value: 0 },
            { name: 'insect', value: 0 },
            { name: 'wildlife', value: 0 },
            { name: 'reptile', value: 0 },
            { name: 'aquatic', value: 0 },
        ],
        goldValue = 10,
        level = 0,
        isSelected = false,
        type = 'equip'
    ) {
        this.destination = destination
        this.key = key
        this.name = name
        this.rarity = rarity
        this.icon = icon
        this.stats = stats
        this.bonuses = bonuses
        this.goldValue = goldValue
        this.level = level
        this.isSelected = isSelected
        this.type = type
    }
}

export default EquipItem