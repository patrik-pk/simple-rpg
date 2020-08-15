import icons from './icons/creatureIcons'

class EnemyType {
    constructor(name, specie, icon, minLevel, maxLevel, drops = ['low soul', 'high feather']) {
        this.name = name
        this.specie = specie
        this.icon = icon
        this.minLevel = minLevel
        this.maxLevel = maxLevel
        this.drops = drops
    }
}

// drops bude array objektu is s ikonkami

const possibleEnemies = {
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', icons.Rooster, 0, 2), // low feather, low soul
        turkey: new EnemyType('Turkey', 'avian', icons.Turkey, 3, 5),  // low feather, low soul
        stork: new EnemyType('Stork', 'avian', icons.Stork, 6, 8),  // low feather, low soul
        owl: new EnemyType('Owl', 'avian', icons.Owl, 9, 11),  // medium feather, medium soul
        falcon: new EnemyType('Falcon', 'avian', icons.Falcon, 12, 14), // medium feather, medium soul
        vulture: new EnemyType('Vulture', 'avian', icons.Vulture, 15, 17), // medium feather, medium soul
        hawk: new EnemyType('Hawk', 'avian', icons.Hawk, 18, 21),  // medium feather, medium soul
        microraptor: new EnemyType('Microraptor', 'avian', icons.Microraptor, 22, 26), // high feather, high soul
        pterodactyl: new EnemyType('Rooster', 'avian', icons.Pterodactyl, 27, 30), // high feather, high soul
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', icons.Magyarosaurus, 0, 3), // low soul, low fossil
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', icons.Epidexipteryx, 4, 7), // low soul, low fossil
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', icons.Camarosaurus, 8, 10), // low soul, low fossil
        dilong: new EnemyType('Dilong', 'dinosaur', icons.Dilong, 11, 13), // medium soul, medium fossil
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', icons.Centrosaurus, 14, 16), // medium soul, medium fossil
        guanlong: new EnemyType('Guanlong', 'dinosaur', icons.Guanlong, 17, 19),  // medium soul, medium fossil
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', icons.Monoclonius, 20, 22), // medium soul, medium fossil
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', icons.Gorgosaurus, 23, 25),  // high soul, high fossil
        irritator: new EnemyType('Irritator', 'dinosaur', icons.Irritator, 26, 28),  // high soul, high fossil
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', icons.Tyrannosaurus, 29, 30), // high soul, high fossil
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', icons.Cockroach, 0, 2), // low soul, weak posion
        beetle: new EnemyType('Beetle', 'insect', icons.Beetle, 3, 4),  // low soul, weak poison
        mosquito: new EnemyType('Mosquito', 'insect', icons.Mosquito, 5, 6), // low soul, weak poison
        spider: new EnemyType('Spider', 'insect', icons.Spider, 7, 8),  // low soul, weak posion
        dragonfly: new EnemyType('Dragonfly', 'insect', icons.Dragonfly, 9, 10), // medium soul, medim poison
        chalcosoma: new EnemyType('Chalcosoma', 'insect', icons.Chalcosoma, 11, 14), // medium soul, medium poison      
        tarantula: new EnemyType('Tarantula', 'insect', icons.Tarantula, 15, 19), // medium soul, medium poison
        scorpion: new EnemyType('Scorpion', 'insect', icons.Scorpion, 20, 25), // high soul, strong poison
        millipede: new EnemyType('Millipede', 'insect', icons.Millipede, 25, 30), // high soul, strong poison
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', icons.Deer, 0, 3), // low soul, soft wildlife leather
        rat: new EnemyType('Rat', 'wildlife', icons.Rat, 4, 6), // low soul, soft wildlife leather
        fox: new EnemyType('Fox', 'wildlife', icons.Fox, 7, 9),  // low soul, soft wildlife leather
        boar: new EnemyType('Boar', 'wildlife', icons.Boar, 10, 11), // medium soul, medium wildlife leather
        buffalo: new EnemyType('Buffalo', 'wildlife', icons.Buffalo, 12, 14), // medium soul, medium wildlife leather
        bull: new EnemyType('Bull', 'wildlife', icons.Bull, 15, 17), // medium soul, medium wildlife leather
        bear: new EnemyType('Bear', 'wildlife', icons.Bear, 18, 20), // medium soul, medium wildlife leather
        lion: new EnemyType('Lion', 'wildlife', icons.Lion, 21, 23), // high soul, tough wildlife leather
        rhino: new EnemyType('Rhino', 'wildlife', icons.Rhino, 24, 26), // high soul, tought wildlife leather
        mammoth: new EnemyType('Mammoth', 'wildlife', icons.Mammoth, 27, 28), // high soul, tough wildlife leather
        tiger: new EnemyType('Tiger', 'wildlife', icons.Tiger, 29, 30), // high soul, tough wildlife leather
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', icons.Gecko, 0, 3), // low soul, soft reptile leather
        chameleon: new EnemyType('Chameleon', 'reptile', icons.Chameleon, 4, 7), // low soul, soft reptile leather 
        turtle: new EnemyType('Turtle', 'reptile', icons.Turtle, 8, 9),  // low soul, soft reptile leather
        iguana: new EnemyType('Iguana', 'reptile', icons.Iguana, 10, 12), // medium soul, medium reptile leather
        python: new EnemyType('Python', 'reptile', icons.Python, 13, 16), // medium soul, medium reptile leather
        crocodile: new EnemyType('Crocodile', 'reptile', icons.Crocodile, 17, 21), // medium soul, medium reptile leather
        cobra: new EnemyType('Cobra', 'reptile', icons.Cobra, 22, 26), // high soul, tough reptile leather
        dragon: new EnemyType('Dragon', 'reptile', icons.Dragon, 27, 30), // high soul, tough reptile leather
    },
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', icons.Balloonfish, 0, 4), // low soul, small aquatic meat
        ray: new EnemyType('Ray', 'aquatic', icons.Ray, 5, 9),  // low soul, small aquatic meat
        anglerfish: new EnemyType('Anglerfish', 'aquatic', icons.Anglerfish, 10, 14), // medium soul, medium aquatic meat 
        goliath: new EnemyType('Goliath', 'aquatic', icons.Goliath, 15, 17), // medium soul, medium aquatic meat
        hammerhead: new EnemyType('Hammerhead', 'aquatic', icons.Hammerhead, 18, 21), // medium soul, medium aquatic meat
        merlin: new EnemyType('Merlin', 'aquatic', icons.Merlin, 22, 24), // high soul, large aquatic meat
        shark: new EnemyType('Shark', 'aquatic', icons.Shark, 25, 27),  // high soul, large aquatic meat
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', icons.Elasmosaurus, 28, 29), // high soul, large aquatic meat
        kraken: new EnemyType('Kraken', 'aquatic', icons.Kraken, 30, 30), // high soul, large aquatic meat
    }
}

export default possibleEnemies

// low armor scale do 15
// medium scale do 25
// high scale do 30