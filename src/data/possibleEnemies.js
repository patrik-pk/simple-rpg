import creatureIcons from './icons/creatureIcons'
import possibleDrops from './possibleDrops'

// Destructure Possible Drops
const {
    avians: avi,
    dinosaurs: dino,
    insect: ins,
    wildlife: wf,
    reptiles: rt,
    aquatic: aq
} = possibleDrops

// EnemyType Class
class EnemyType {
    constructor(
        name, 
        specie, 
        icon, 
        minLevel, 
        maxLevel, 
        drops
    ) {
        this.name = name
        this.specie = specie
        this.icon = icon
        this.minLevel = minLevel
        this.maxLevel = maxLevel
        this.drops = drops
    }
}

// Possible Enemies Object (exported)
const possibleEnemies = {
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', creatureIcons.Rooster, 0, 2, [avi.smallSoul, avi.smallFeather]), 
        turkey: new EnemyType('Turkey', 'avian', creatureIcons.Turkey, 3, 5, [avi.smallSoul, avi.smallFeather]),  
        stork: new EnemyType('Stork', 'avian', creatureIcons.Stork, 6, 8, [avi.smallSoul, avi.smallFeather]),  
        owl: new EnemyType('Owl', 'avian', creatureIcons.Owl, 9, 11, [avi.mediumSoul, avi.mediumFeather]),  
        falcon: new EnemyType('Falcon', 'avian', creatureIcons.Falcon, 12, 14, [avi.mediumSoul, avi.mediumFeather]), 
        vulture: new EnemyType('Vulture', 'avian', creatureIcons.Vulture, 15, 17, [avi.mediumSoul, avi.mediumFeather]), 
        hawk: new EnemyType('Hawk', 'avian', creatureIcons.Hawk, 18, 21, [avi.mediumSoul, avi.mediumFeather]),  
        microraptor: new EnemyType('Microraptor', 'avian', creatureIcons.Microraptor, 22, 26, [avi.largeSoul, avi.largeFeather]),
        pterodactyl: new EnemyType('Pterodactyl', 'avian', creatureIcons.Pterodactyl, 27, 30, [avi.largeSoul, avi.largeFeather]), 
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', creatureIcons.Magyarosaurus, 0, 3, [dino.smallSoul, dino.smallFossil]),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', creatureIcons.Epidexipteryx, 4, 7, [dino.smallSoul, dino.smallFossil]),
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', creatureIcons.Camarosaurus, 8, 10, [dino.smallSoul, dino.smallFossil]),
        dilong: new EnemyType('Dilong', 'dinosaur', creatureIcons.Dilong, 11, 13, [dino.mediumSoul, dino.mediumFossil]),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', creatureIcons.Centrosaurus, 14, 16, [dino.mediumSoul, dino.mediumFossil]),
        guanlong: new EnemyType('Guanlong', 'dinosaur', creatureIcons.Guanlong, 17, 19, [dino.mediumSoul, dino.mediumFossil]), 
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', creatureIcons.Monoclonius, 20, 22, [dino.mediumSoul, dino.mediumFossil]),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', creatureIcons.Gorgosaurus, 23, 25, [dino.largeSoul, dino.largeFossil]), 
        irritator: new EnemyType('Irritator', 'dinosaur', creatureIcons.Irritator, 26, 28, [dino.largeSoul, dino.largeFossil]), 
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', creatureIcons.Tyrannosaurus, 29, 30, [dino.largeSoul, dino.largeFossil]),
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', creatureIcons.Cockroach, 0, 2, [ins.smallSoul, ins.weakPoison]), 
        beetle: new EnemyType('Beetle', 'insect', creatureIcons.Beetle, 3, 4, [ins.smallSoul, ins.weakPoison]),  
        mosquito: new EnemyType('Mosquito', 'insect', creatureIcons.Mosquito, 5, 6, [ins.smallSoul, ins.weakPoison]), 
        spider: new EnemyType('Spider', 'insect', creatureIcons.Spider, 7, 8, [ins.smallSoul, ins.weakPoison]),  
        dragonfly: new EnemyType('Dragonfly', 'insect', creatureIcons.Dragonfly, 9, 10, [ins.mediumSoul, ins.mediumPoison]), 
        chalcosoma: new EnemyType('Chalcosoma', 'insect', creatureIcons.Chalcosoma, 11, 14, [ins.mediumSoul, ins.mediumPoison]),    
        tarantula: new EnemyType('Tarantula', 'insect', creatureIcons.Tarantula, 15, 19, [ins.mediumSoul, ins.mediumPoison]), 
        scorpion: new EnemyType('Scorpion', 'insect', creatureIcons.Scorpion, 20, 25, [ins.largeSoul, ins.strongPoison]),
        millipede: new EnemyType('Millipede', 'insect', creatureIcons.Millipede, 25, 30, [ins.largeSoul, ins.strongPoison]),
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', creatureIcons.Deer, 0, 3, [wf.smallSoul, wf.softLeather]),
        rat: new EnemyType('Rat', 'wildlife', creatureIcons.Rat, 4, 6, [wf.smallSoul, wf.softLeather]),
        fox: new EnemyType('Fox', 'wildlife', creatureIcons.Fox, 7, 9, [wf.smallSoul, wf.softLeather]), 
        boar: new EnemyType('Boar', 'wildlife', creatureIcons.Boar, 10, 11, [wf.mediumSoul, wf.mediumLeather]),
        buffalo: new EnemyType('Buffalo', 'wildlife', creatureIcons.Buffalo, 12, 14, [wf.mediumSoul, wf.mediumLeather]),
        bull: new EnemyType('Bull', 'wildlife', creatureIcons.Bull, 15, 17, [wf.mediumSoul, wf.mediumLeather]),
        bear: new EnemyType('Bear', 'wildlife', creatureIcons.Bear, 18, 20, [wf.mediumSoul, wf.mediumLeather]),
        lion: new EnemyType('Lion', 'wildlife', creatureIcons.Lion, 21, 23, [wf.largeSoul, wf.toughLeather]),
        rhino: new EnemyType('Rhino', 'wildlife', creatureIcons.Rhino, 24, 26, [wf.largeSoul, wf.toughLeather]),
        mammoth: new EnemyType('Mammoth', 'wildlife', creatureIcons.Mammoth, 27, 28, [wf.largeSoul, wf.toughLeather]),
        tiger: new EnemyType('Tiger', 'wildlife', creatureIcons.Tiger, 29, 30, [wf.largeSoul, wf.toughLeather]),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', creatureIcons.Gecko, 0, 3, [rt.smallSoul, rt.softLeather]), 
        chameleon: new EnemyType('Chameleon', 'reptile', creatureIcons.Chameleon, 4, 7, [rt.smallSoul, rt.softLeather]),  
        turtle: new EnemyType('Turtle', 'reptile', creatureIcons.Turtle, 8, 9, [rt.smallSoul, rt.softLeather]),  
        iguana: new EnemyType('Iguana', 'reptile', creatureIcons.Iguana, 10, 12, [rt.mediumSoul, rt.mediumLeather]),
        python: new EnemyType('Python', 'reptile', creatureIcons.Python, 13, 16, [rt.mediumSoul, rt.mediumLeather]),
        crocodile: new EnemyType('Crocodile', 'reptile', creatureIcons.Crocodile, 17, 21, [rt.mediumSoul, rt.mediumLeather]),
        cobra: new EnemyType('Cobra', 'reptile', creatureIcons.Cobra, 22, 26, [rt.largeSoul, rt.toughLeather]),
        dragon: new EnemyType('Dragon', 'reptile', creatureIcons.Dragon, 27, 30, [rt.largeSoul, rt.toughLeather]),
    },
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', creatureIcons.Balloonfish, 0, 4, [aq.smallSoul, aq.smallMeat]),
        ray: new EnemyType('Ray', 'aquatic', creatureIcons.Ray, 5, 9, [aq.smallSoul, aq.smallMeat]), 
        anglerfish: new EnemyType('Anglerfish', 'aquatic', creatureIcons.Anglerfish, 10, 14, [aq.mediumSoul, aq.mediumMeat]), 
        goliath: new EnemyType('Goliath', 'aquatic', creatureIcons.Goliath, 15, 17, [aq.mediumSoul, aq.mediumMeat]),
        hammerhead: new EnemyType('Hammerhead', 'aquatic', creatureIcons.Hammerhead, 18, 21, [aq.mediumSoul, aq.mediumMeat]),
        merlin: new EnemyType('Merlin', 'aquatic', creatureIcons.Merlin, 22, 24, [aq.largeSoul, aq.largeMeat]),
        shark: new EnemyType('Shark', 'aquatic', creatureIcons.Shark, 25, 27, [aq.largeSoul, aq.largeMeat]), 
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', creatureIcons.Elasmosaurus, 28, 29, [aq.largeSoul, aq.largeMeat]),
        kraken: new EnemyType('Kraken', 'aquatic', creatureIcons.Kraken, 30, 30, [aq.largeSoul, aq.largeMeat]),
    }
}

export default possibleEnemies