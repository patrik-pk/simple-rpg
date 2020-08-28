import equipIcons from "./icons/equipIcons"
import EquipItem from './EquipItem'

const icons = equipIcons.type1

const startingItems = [
    new EquipItem(icons.helmet.iconKey, undefined, 0, 'Helmet', 'Helmet', 'Common', icons.helmet.icon, { statName: 'Armor', value: 7 }),
    new EquipItem(icons.chestplate.iconKey, undefined, 1, 'Chestplate', 'Chestplate', 'Common', icons.chestplate.icon, { statName: 'Armor', value: 10 }),
    new EquipItem(icons.pants.iconKey, undefined, 2, 'Pants', 'Pants', 'Common', icons.pants.icon, { statName: 'Armor', value: 8 }),
    new EquipItem(icons.gloves.iconKey, undefined, 3, 'Gloves', 'Gloves', 'Common', icons.gloves.icon, { statName: 'Armor', value: 6 }),
    new EquipItem(icons.boots.iconKey, undefined, 4, 'Boots', 'Boots', 'Common', icons.boots.icon, { statName: 'Armor', value: 6 }),
    new EquipItem(icons.sword.iconKey, undefined, 5, 'Sword', 'Sword', 'Common', icons.sword.icon, { statName: 'M-DMG', value: 125 }),

    new EquipItem(icons.necklace.iconKey, undefined, 6, 'Necklace', 'Necklace', 'Common', icons.necklace.icon, { statName: 'HP', value: 100 }),
    new EquipItem(icons.earrings.iconKey, undefined, 7, 'Earrings', 'Earrings', 'Common', icons.earrings.icon, { statName: 'HP', value: 100 }),
    new EquipItem(icons.ring.iconKey, undefined, 8, 'Ring', 'Ring', 'Common', icons.ring.icon, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(icons.belt.iconKey, undefined, 9, 'Belt', 'Belt', 'Common', icons.belt.icon, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(icons.shield.iconKey, undefined, 10, 'Shield', 'Shield', 'Common', icons.shield.icon, { statName: 'Block chance', value: 15 }),
    new EquipItem(icons.bow.iconKey, undefined, 11, 'Bow', 'Bow', 'Common', icons.bow.icon, { statName: 'R-DMG', value: 125 }),
]

export default startingItems