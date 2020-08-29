import equipIcons from './icons/equipIcons'

// name is used for comparing values when equipping,
// while displayedName is the value that is displayed
// the reason for this is because displayedName isn't always the same as name
class EquipItem {
    constructor(
        iconKey = 'type2-shuriken',
        destination = 'Equipped',
        key,
        name = 'Helmet',
        displayedName = 'Helmet',
        rarity = 'Common',
        icon = equipIcons.Helmet,
        stats = { statName: 'Armor', value: 7 },
        bonuses = [
            { name: 'aquatic', value: 0 },
            { name: 'avian', value: 0 },
            { name: 'dinosaur', value: 0 },
            { name: 'insect', value: 0 },
            { name: 'wildlife', value: 0 },
            { name: 'reptile', value: 0 },
        ],
        goldValue = 10,
        level = 0,
        isSelected = false,
        type = 'equip',
        classes
    ) {
        this.iconKey = iconKey
        this.destination = destination
        this.key = key
        this.name = name
        this.displayedName = displayedName
        this.rarity = rarity
        this.icon = icon
        this.stats = stats
        this.bonuses = bonuses
        this.goldValue = goldValue
        this.level = level
        this.isSelected = isSelected
        this.type = type
        this.classes = classes
    }
}

export default EquipItem