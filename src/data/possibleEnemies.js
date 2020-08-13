import icons from './creatureIcons'

class EnemyType {
    constructor(name, specie, icon, minLevel, maxLevel) {
        this.name = name
        this.specie = specie
        this.icon = icon
        this.minLevel = minLevel
        this.maxLevel = maxLevel
    }
}

const possibleEnemies = {
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', icons.Rooster, 0, 2), 
        turkey: new EnemyType('Turkey', 'avian', icons.Turkey, 3, 5),  
        stork: new EnemyType('Stork', 'avian', icons.Stork, 6, 8), 
        owl: new EnemyType('Owl', 'avian', icons.Owl, 9, 11), 
        falcon: new EnemyType('Falcon', 'avian', icons.Falcon, 12, 14), 
        vulture: new EnemyType('Vulture', 'avian', icons.Vulture, 15, 17), 
        hawk: new EnemyType('Hawk', 'avian', icons.Hawk, 18, 21), 
        microraptor: new EnemyType('Microraptor', 'avian', icons.Microraptor, 22, 26),
        pterodactyl: new EnemyType('Rooster', 'avian', icons.Pterodactyl, 27, 30), 
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', icons.Magyarosaurus, 0, 3),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', icons.Epidexipteryx, 4, 7), 
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', icons.Camarosaurus, 8, 10),
        dilong: new EnemyType('Dilong', 'dinosaur', icons.Dilong, 11, 13),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', icons.Centrosaurus, 14, 16),
        guanlong: new EnemyType('Guanlong', 'dinosaur', icons.Guanlong, 17, 19), 
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', icons.Monoclonius, 20, 22),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', icons.Gorgosaurus, 23, 25), 
        irritator: new EnemyType('Irritator', 'dinosaur', icons.Irritator, 26, 28), 
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', icons.Tyrannosaurus, 29, 30), 
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', icons.Cockroach, 0, 2), 
        beetle: new EnemyType('Beetle', 'insect', icons.Beetle, 3, 4),  
        mosquito: new EnemyType('Mosquito', 'insect', icons.Mosquito, 5, 6), 
        spider: new EnemyType('Spider', 'insect', icons.Spider, 7, 8), 
        dragonfly: new EnemyType('Dragonfly', 'insect', icons.Dragonfly, 9, 10), 
        chalcosoma: new EnemyType('Chalcosoma', 'insect', icons.Chalcosoma, 11, 14),      
        tarantula: new EnemyType('Tarantula', 'insect', icons.Tarantula, 15, 19),        
        scorpion: new EnemyType('Scorpion', 'insect', icons.Scorpion, 20, 25),
        millipede: new EnemyType('Millipede', 'insect', icons.Millipede, 25, 30), 
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', icons.Deer, 0, 3),
        rat: new EnemyType('Rat', 'wildlife', icons.Rat, 4, 6), 
        fox: new EnemyType('Fox', 'wildlife', icons.Fox, 7, 9),  
        boar: new EnemyType('Boar', 'wildlife', icons.Boar, 10, 11), 
        buffalo: new EnemyType('Buffalo', 'wildlife', icons.Buffalo, 12, 14), 
        bull: new EnemyType('Bull', 'wildlife', icons.Bull, 15, 17), 
        bear: new EnemyType('Bear', 'wildlife', icons.Bear, 18, 20), 
        lion: new EnemyType('Lion', 'wildlife', icons.Lion, 21, 23),
        rhino: new EnemyType('Rhino', 'wildlife', icons.Rhino, 24, 26), 
        mammoth: new EnemyType('Mammoth', 'wildlife', icons.Mammoth, 27, 28),
        tiger: new EnemyType('Tiger', 'wildlife', icons.Tiger, 29, 30),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', icons.Gecko, 0, 3), 
        chameleon: new EnemyType('Chameleon', 'reptile', icons.Chameleon, 4, 7), 
        turtle: new EnemyType('Turtle', 'reptile', icons.Turtle, 8, 9), 
        iguana: new EnemyType('Iguana', 'reptile', icons.Iguana, 10, 12), 
        python: new EnemyType('Python', 'reptile', icons.Python, 13, 16), 
        crocodile: new EnemyType('Crocodile', 'reptile', icons.Crocodile, 17, 21), 
        cobra: new EnemyType('Cobra', 'reptile', icons.Cobra, 22, 26),
        dragon: new EnemyType('Dragon', 'reptile', icons.Dragon, 27, 30),
    },
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', icons.Balloonfish, 0, 4),
        ray: new EnemyType('Ray', 'aquatic', icons.Ray, 5, 9), 
        anglerfish: new EnemyType('Anglerfish', 'aquatic', icons.Anglerfish, 10, 14), 
        goliath: new EnemyType('Goliath', 'aquatic', icons.Goliath, 15, 17), 
        hammerhead: new EnemyType('Hammerhead', 'aquatic', icons.Hammerhead, 18, 21),
        merlin: new EnemyType('Merlin', 'aquatic', icons.Merlin, 22, 24), 
        shark: new EnemyType('Shark', 'aquatic', icons.Shark, 25, 27), 
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', icons.Elasmosaurus, 28, 29),
        kraken: new EnemyType('Kraken', 'aquatic', icons.Kraken, 30, 30), 
    }
}

export default possibleEnemies