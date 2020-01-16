
// Data file with all possible enemies that you can find in the game
// Adding or removing would work in Classic game, but bosses are set
// by the possibleEnemies array index, so be careful.

const artUrl = "https://www.deviantart.com/"

const darkForestUrl = require("../resources/environment/dark_forest.jpg")
const desertUrl = require("../resources/environment/desert.jpg")
const cliffUrl = require("../resources/environment/cliff.jpg")
const deepForestUrl = require("../resources/environment/deep_forest.jpg")

class Enemy {
    constructor(name, specie, artBy, artByUrl, imgSrc, environmentSrc) {
        this.name = name
        this.specie = specie
        this.artBy = artBy
        this.artByUrl = artByUrl
        this.imgSrc = imgSrc
        this.environmentSrc = environmentSrc
    }
}


// Beasts
const direwolf = new Enemy("Direwolf", "beasts", "Akiman", artUrl + "Akiman", require("../resources/art/beasts/direwolf.jpg"), darkForestUrl)
const tulpar = new Enemy("Tulpar", "beasts", "Akiman", artUrl + "Akiman", require("../resources/art/beasts/tulpar.jpg"), darkForestUrl)
const wolf = new Enemy("Wolf", "beasts", "25Tachigami", artUrl + "25tachigami", require("../resources/art/beasts/wolf.jpg"), darkForestUrl)

// Dragons
const fire_dragon = new Enemy("Fire Dragon", "dragons", "Manzanedo", artUrl + "manzanedo", require("../resources/art/dragons/fire_dragon.jpg"), desertUrl)
const ice_dragon = new Enemy("Ice Dragon", "dragons", "AlectorFencer", artUrl + "alectorfencer", require("../resources/art/dragons/ice_dragon.jpg"), cliffUrl)
const sea_dragon = new Enemy("Sea Dragon", "dragons", "TheRafa", artUrl + "therafa", require("../resources/art/dragons/sea_dragon.jpg"), cliffUrl)

// Insect
const centipede = new Enemy("Centipede", "insect", "Zezhou", artUrl + "zezhou", require("../resources/art/insect/centipede.jpg"), deepForestUrl)
const scorpion = new Enemy("Scorpion", "insect", "fooyee", artUrl + "fooyee", require("../resources/art/insect/scorpion.jpg"), desertUrl)
const wasp = new Enemy("Wasp", "insect", "Akiman", artUrl + "akiman", require("../resources/art/insect/wasp.jpg"), darkForestUrl)

// Monsters
const abra = new Enemy("Abra", "monsters", "Akiman", artUrl + "Akiman", require("../resources/art/monsters/abra.jpg"), deepForestUrl)
const chupacabra = new Enemy("Chupacabra", "monsters", "Gpzang", artUrl + "gpzang", require("../resources/art/monsters/chupacabra.jpg"), desertUrl)
const sea_monster = new Enemy("Sea Monster", "monsters", "Akiman", artUrl + "Akiman", require("../resources/art/monsters/sea_monster.jpg"), cliffUrl)

// Reptiles
const frog = new Enemy("Frog", "reptiles", "DanikYaroslavTomyn", artUrl + "danikyaroslavtomyn", require("../resources/art/reptiles/frog.jpg"), deepForestUrl)
const lizzard = new Enemy("Lizzard", "reptiles", "Zezhou", artUrl + "zezhou", require("../resources/art/reptiles/lizzard.jpg"), cliffUrl)
const rex = new Enemy("Rex", "reptiles", "Akiman", artUrl + "Akiman", require("../resources/art/reptiles/rex.jpg"), deepForestUrl)


const possibleEnemies = [
    direwolf,
    tulpar,
    wolf,
    fire_dragon,
    ice_dragon,
    sea_dragon,
    centipede,
    scorpion,
    wasp,
    abra,
    chupacabra,
    sea_monster,
    frog,
    lizzard,
    rex
]

export default possibleEnemies