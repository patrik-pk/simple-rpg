import generateEnemy from '../logic/generateEnemy'
import possibleEnemies from './possibleEnemies'

// Destructure from props
const { avians, dinosaurs, insect, wildlife, reptiles, aquatic } = possibleEnemies

// Boss FC - strongStatIndex valid values are 0 or 1, 
// 0 is for stronger melee armor, 1 is for stronger ranged armor
const boss = (level, specificEnemy, strongStatIndex, specie) => {
    return generateEnemy('Boss', level, undefined, { enemy: specificEnemy, isSet: true }, strongStatIndex, specie)
}

// Generate Bosses
const bosses = [
    // Avians
    [
        boss(9, avians.owl, 1, 'avian'),
        boss(15, avians.falcon, 1, 'avian'),
        boss(20, avians.hawk, 1, 'avian'),
        boss(25, avians.microraptor, 1, 'avian'),
        boss(30, avians.pterodactyl, 1, 'avian'),
    ],
    // Dinosaurs
    [   
        boss(13, dinosaurs.dilong, 0, 'dinosaur'),
        boss(18, dinosaurs.guanlong, 0, 'dinosaur'),
        boss(22, dinosaurs.monoclonius, 0, 'dinosaur'),
        boss(28, dinosaurs.irritator, 0, 'dinosaur'),
        boss(32, dinosaurs.tyrannosaurus, 0, 'dinosaur'),
    ],
    // Insect
    [
        boss(6, insect.mosquito, 1, 'insect'),
        boss(10, insect.dragonfly, 1, 'insect'),
        boss(16, insect.tarantula, 1, 'insect'),
        boss(24, insect.scorpion, 1, 'insect'),
        boss(29, insect.millipede, 1, 'insect'),

    ],
    // Wildlife
    [
        boss(5, wildlife.rat, 1, 'wildlife'),
        boss(11, wildlife.boar, 0, 'wildlife'),
        boss(17, wildlife.bull, 0, 'wildlife'),
        boss(23, wildlife.lion, 0, 'wildlife'),
        boss(30, wildlife.tiger, 0, 'wildlife'),

    ],
    // Reptiles
    [
        boss(7, reptiles.chameleon, 1, 'reptile'),
        boss(12, reptiles.iguana, 1, 'reptile'),
        boss(19, reptiles.crocodile, 0, 'reptile'),
        boss(26, reptiles.cobra, 1, 'reptile'),
        boss(35, reptiles.dragon, 1, 'reptile'),
    ],
    // Aquatic
    [
        boss(8, aquatic.ray, 0, 'aquatic'),
        boss(14, aquatic.anglerfish, 0, 'aquatic'),
        boss(21, aquatic.hammerhead, 0, 'aquatic'),
        boss(27, aquatic.shark, 0, 'aquatic'),
        boss(40, aquatic.kraken, null, 'aquatic'),
    ],
]


export default bosses
