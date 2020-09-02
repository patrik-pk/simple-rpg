import generateEnemy from '../../shared/generateEnemy'
import possibleEnemies from '../../shared/data/possibleEnemies'

// Destructure from props
const { avians, dinosaurs, insect, wildlife, reptiles, aquatic } = possibleEnemies

// Boss FC - strongStatIndex valid values are 0 or 1, 
// 0 is for stronger melee armor, 1 is for stronger ranged armor
const boss = (level, specificEnemy, strongStatIndex, specie) => {
    return generateEnemy('Boss', level, undefined, { enemy: specificEnemy, isSet: true }, strongStatIndex, specie)
}

// Generate Bosses
const bosses = [
    
    // Aquatic
    [
        boss(8, aquatic.ray, 0, 'Aquatic'),
        boss(14, aquatic.anglerfish, 0, 'Aquatic'),
        boss(21, aquatic.hammerhead, 0, 'Aquatic'),
        boss(27, aquatic.shark, 0, 'Aquatic'),
        boss(40, aquatic.kraken, null, 'Aquatic'),
    ],
    // Avian
    [
        boss(9, avians.owl, 1, 'Avian'),
        boss(15, avians.falcon, 1, 'Avian'),
        boss(20, avians.hawk, 1, 'Avian'),
        boss(25, avians.microraptor, 1, 'Avian'),
        boss(30, avians.pterodactyl, 1, 'Avian'),
    ],
    // Dinosaur
    [   
        boss(13, dinosaurs.dilong, 0, 'Dinosaur'),
        boss(18, dinosaurs.guanlong, 0, 'Dinosaur'),
        boss(22, dinosaurs.monoclonius, 0, 'Dinosaur'),
        boss(28, dinosaurs.irritator, 0, 'Dinosaur'),
        boss(32, dinosaurs.tyrannosaurus, 0, 'Dinosaur'),
    ],
    // Insect
    [
        boss(6, insect.mosquito, 1, 'Insect'),
        boss(10, insect.dragonfly, 1, 'Insect'),
        boss(16, insect.tarantula, 1, 'Insect'),
        boss(24, insect.scorpion, 1, 'Insect'),
        boss(29, insect.millipede, 1, 'Insect'),

    ],
    // Wildlife
    [
        boss(5, wildlife.rat, 1, 'Wildlife'),
        boss(11, wildlife.boar, 0, 'Wildlife'),
        boss(17, wildlife.bull, 0, 'Wildlife'),
        boss(23, wildlife.lion, 0, 'Wildlife'),
        boss(30, wildlife.tiger, 0, 'Wildlife'),

    ],
    // Reptile
    [
        boss(7, reptiles.chameleon, 1, 'Reptile'),
        boss(12, reptiles.iguana, 1, 'Reptile'),
        boss(19, reptiles.crocodile, 0, 'Reptile'),
        boss(26, reptiles.cobra, 1, 'Reptile'),
        boss(35, reptiles.dragon, 1, 'Reptile'),
    ],
]


export default bosses
