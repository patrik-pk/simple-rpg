

let beasts = { name: "beasts", value: 0 }
let dragons = { name: "dragons", value: 0 }
let insect = { name: "insect", value: 0 }
let monsters = { name: "monsters", value: 0 }
let reptiles = { name: "reptiles", value: 0 }

const playerData = {
    currentHp: 0,
    maxHp: 0,
    armor: 0,
    meleeDamage: 0,
    rangedDamage: 0,
    critChance: 0,
    blockChance: 0,
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


export default playerData
