import icons from './creatureIcons'

class EnemyType {
    constructor(name, specie, icon) {
        this.name = name
        this.specie = specie
        this.icon = icon
    }
}

const species = {
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', icons.Magyarosaurus),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', icons.Epidexipteryx),
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', icons.Camarosaurus),
        dilong: new EnemyType('Dilong', 'dinosaur', icons.Dilong),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', icons.Centrosaurus),
        guanlong: new EnemyType('Guanlong', 'dinosaur', icons.Guanlong),
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', icons.Monoclonius),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', icons.Gorgosaurus),
        irritator: new EnemyType('Irritator', 'dinosaur', icons.Irritator),
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', icons.Tyrannosaurus),
    },
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', icons.Rooster),
        turkey: new EnemyType('Turkey', 'avian', icons.Turkey),
        stork: new EnemyType('Stork', 'avian', icons.Stork),
        owl: new EnemyType('Owl', 'avian', icons.Owl),
        falcon: new EnemyType('Falcon', 'avian', icons.Falcon),
        vulture: new EnemyType('Vulture', 'avian', icons.Vulture),
        hawk: new EnemyType('Hawk', 'avian', icons.Hawk),
        microraptor: new EnemyType('Microraptor', 'avian', icons.Microraptor),
        pterodactyl: new EnemyType('Rooster', 'avian', icons.Pterodactyl),
    },
    // Insect
    insect: {
        mosquito: new EnemyType('Mosquito', 'insect', icons.Mosquito),        
        cockroach: new EnemyType('Cockroach', 'insect', icons.Cockroach),        
        beetle: new EnemyType('Beetle', 'insect', icons.Beetle),        
        spider: new EnemyType('Spider', 'insect', icons.Spider),        
        dragonfly: new EnemyType('Dragonfly', 'insect', icons.Dragonfly),        
        chalcosoma: new EnemyType('Chalcosoma', 'insect', icons.Chalcosoma),        
        tarantula: new EnemyType('Tarantula', 'insect', icons.Tarantula),        
        scorpion: new EnemyType('Scorpion', 'insect', icons.Scorpion),        
        millipede: new EnemyType('Millipede', 'insect', icons.Millipede),        
    },
    // Wildlife
    wildlife: {
        rat: new EnemyType('Rat', 'wildlife', icons.Rat),
        deer: new EnemyType('Deer', 'wildlife', icons.Deer),
        fox: new EnemyType('Fox', 'wildlife', icons.Fox),
        boar: new EnemyType('Boar', 'wildlife', icons.Boar),
        buffalo: new EnemyType('Buffalo', 'wildlife', icons.Buffalo),
        bull: new EnemyType('Bull', 'wildlife', icons.Bull),
        bear: new EnemyType('Bear', 'wildlife', icons.Bear),
        lion: new EnemyType('Lion', 'wildlife', icons.Lion),
        rhino: new EnemyType('Rhino', 'wildlife', icons.Rhino),
        mammoth: new EnemyType('Mammoth', 'wildlife', icons.Mammoth),
        tiger: new EnemyType('Tiger', 'wildlife', icons.Tiger),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', icons.Gecko),
        chameleon: new EnemyType('Chameleon', 'reptile', icons.Chameleon),
        iguana: new EnemyType('Iguana', 'reptile', icons.Iguana),
        turtle: new EnemyType('Turtle', 'reptile', icons.Turtle),
        python: new EnemyType('Python', 'reptile', icons.Python),
        crocodile: new EnemyType('Crocodile', 'reptile', icons.Crocodile),
        cobra: new EnemyType('Cobra', 'reptile', icons.Cobra),
        dragon: new EnemyType('Dragon', 'reptile', icons.Dragon),
    },
    // Aquatic
    aquatic: {
        ray: new EnemyType('Ray', 'aquatic', icons.Ray),
        anglerfish: new EnemyType('Anglerfish', 'aquatic', icons.Anglerfish),
        goliath: new EnemyType('Goliath', 'aquatic', icons.Goliath),
        hammerhead: new EnemyType('Hammerhead', 'aquatic', icons.Hammerhead),
        merlin: new EnemyType('Merlin', 'aquatic', icons.Merlin),
        shark: new EnemyType('Shark', 'aquatic', icons.Shark),
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', icons.Elasmosaurus),
        kraken: new EnemyType('Kraken', 'aquatic', icons.Kraken),
    }
}

export default species