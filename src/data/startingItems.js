import equipIcons from "./icons/equipIcons"
import EquipItem from './EquipItem'

const icons = equipIcons.type1

const startingItems = [
    new EquipItem(undefined, 0, 'Helmet', 'Helmet', 'Common', icons.helmet.icon, { statName: 'Armor', value: 7 }),
    new EquipItem(undefined, 1, 'Chestplate', 'Chestplate', 'Common', icons.chestplate.icon, { statName: 'Armor', value: 10 }),
    new EquipItem(undefined, 2, 'Pants', 'Pants', 'Common', icons.pants.icon, { statName: 'Armor', value: 8 }),
    new EquipItem(undefined, 3, 'Gloves', 'Gloves', 'Common', icons.gloves.icon, { statName: 'Armor', value: 6 }),
    new EquipItem(undefined, 4, 'Boots', 'Boots', 'Common', icons.boots.icon, { statName: 'Armor', value: 6 }),
    new EquipItem(undefined, 5, 'Sword', 'Sword', 'Common', icons.sword.icon, { statName: 'M-DMG', value: 125 }),

    new EquipItem(undefined, 6, 'Necklace', 'Necklace', 'Common', icons.necklace.icon, { statName: 'HP', value: 100 }),
    new EquipItem(undefined, 7, 'Earrings', 'Earrings', 'Common', icons.earrings.icon, { statName: 'HP', value: 100 }),
    new EquipItem(undefined, 8, 'Ring', 'Ring', 'Common', icons.ring.icon, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(undefined, 9, 'Belt', 'Belt', 'Common', icons.belt.icon, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(undefined, 10, 'Shield', 'Shield', 'Common', icons.shield.icon, { statName: 'Block chance', value: 15 }),
    new EquipItem(undefined, 11, 'Bow', 'Bow', 'Common', icons.bow.icon, { statName: 'R-DMG', value: 125 }),
]

export default startingItems