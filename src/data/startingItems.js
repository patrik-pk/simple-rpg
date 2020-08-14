import equipIcons from "./icons/equipIcons"
import EquipItem from './EquipItem'

const startingItems = [
    new EquipItem(undefined, 0, 'Helmet', 'Common', equipIcons.Helmet, { statName: 'Armor', value: 7 }),
    new EquipItem(undefined, 1, 'Chestplate', 'Common', equipIcons.Chestplate, { statName: 'Armor', value: 10 }),
    new EquipItem(undefined, 2, 'Pants', 'Common', equipIcons.Pants, { statName: 'Armor', value: 8 }),
    new EquipItem(undefined, 3, 'Gloves', 'Common', equipIcons.Gloves, { statName: 'Armor', value: 6 }),
    new EquipItem(undefined, 4, 'Boots', 'Common', equipIcons.Boots, { statName: 'Armor', value: 6 }),
    new EquipItem(undefined, 5, 'Sword', 'Common', equipIcons.Sword, { statName: 'M-DMG', value: 125 }),

    new EquipItem(undefined, 6, 'Necklace', 'Common', equipIcons.Necklace, { statName: 'HP', value: 175 }),
    new EquipItem(undefined, 7, 'Earrings', 'Common', equipIcons.Earrings, { statName: 'HP', value: 175 }),
    new EquipItem(undefined, 8, 'Ring', 'Common', equipIcons.Ring, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(undefined, 9, 'Belt', 'Common', equipIcons.Belt, { statName: 'Crit. chance', value: 10 }),
    new EquipItem(undefined, 10, 'Shield', 'Common', equipIcons.Shield, { statName: 'Block chance', value: 15 }),
    new EquipItem(undefined, 11, 'Bow', 'Common', equipIcons.Bow, { statName: 'R-DMG', value: 125 }),
]

export default startingItems