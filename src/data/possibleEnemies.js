
const artUrl = "https://www.deviantart.com/"
const enemyUrl = "resources/art/"

const darkForestUrl = "resources/environment/dark_forest.jpg"
const desertUrl = "resources/environment/desert.jpg"
const cliffUrl = "resources/environment/cliff.jpg"
const deepForestUrl = "resources/environment/deep_forest.jpg"

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
const direwolf = new Enemy("Direwolf", "beasts", "Akiman", artUrl + "Akiman", enemyUrl + "beasts/direwolf.jpg", darkForestUrl)
const tulpar = new Enemy("Tulpar", "beasts", "Akiman", artUrl + "Akiman", enemyUrl + "/beasts/tulpar.jpg", darkForestUrl)
const wolf = new Enemy("Wolf", "beasts", "25Tachigami", artUrl + "25tachigami", enemyUrl + "/beasts/wolf.jpg", darkForestUrl)

// Dragons
const fire_dragon = new Enemy("Fire Dragon", "dragons", "Manzanedo", artUrl + "manzanedo", enemyUrl + "dragons/fire_dragon.jpg", desertUrl)
const ice_dragon = new Enemy("Ice Dragon", "dragons", "AlectorFencer", artUrl + "alectorfencer", enemyUrl + "/dragons/ice_dragon.jpg", cliffUrl)
const sea_dragon = new Enemy("Sea Dragon", "dragons", "TheRafa", artUrl + "therafa", enemyUrl + "/dragons/sea_dragon.jpg", cliffUrl)

// Insect
const centipede = new Enemy("Centipede", "insect", "Zezhou", artUrl + "zezhou", enemyUrl + "/insect/centipede.jpg", deepForestUrl)
const scorpion = new Enemy("Scorpion", "insect", "fooyee", artUrl + "fooyee", enemyUrl + "/insect/scorpion.jpg", desertUrl)
const wasp = new Enemy("Wasp", "insect", "Akiman", artUrl + "akiman", enemyUrl + "/insect/wasp.jpg", darkForestUrl)

// Monsters
const abra = new Enemy("Abra", "monsters", "Akiman", artUrl + "Akiman", enemyUrl + "/monsters/abra.jpg", deepForestUrl)
const chupacabra = new Enemy("Chupacabra", "monsters", "Gpzang", artUrl + "gpzang", enemyUrl + "/monsters/chupacabra.jpg", desertUrl)
const sea_monster = new Enemy("Sea Monster", "monsters", "Akiman", artUrl + "Akiman", enemyUrl + "/monsters/sea_monster.jpg", cliffUrl)

// Reptiles
const frog = new Enemy("Frog", "reptiles", "DanikYaroslavTomyn", artUrl + "danikyaroslavtomyn", enemyUrl + "/reptiles/frog.jpg", deepForestUrl)
const lizzard = new Enemy("Lizzard", "reptiles", "Zezhou", artUrl + "zezhou", enemyUrl + "/reptiles/lizzard.jpg", cliffUrl)
const rex = new Enemy("Rex", "reptiles", "Akiman", artUrl + "Akiman", enemyUrl + "/reptiles/rex.jpg", deepForestUrl)


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