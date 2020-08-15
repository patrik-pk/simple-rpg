import creatureIcons from './icons/creatureIcons'
import di from './icons/dropIcons'

class EnemyType {
    constructor(
        name, 
        specie, 
        icon, 
        minLevel, 
        maxLevel, 
        drops = [{ name: 'small soul', icon: di.SmallSoul }, { name: 'high feather', icon: di.Feather }]
    ) {
        this.name = name
        this.specie = specie
        this.icon = icon
        this.minLevel = minLevel
        this.maxLevel = maxLevel
        this.drops = drops
    }
}

const possibleEnemies = {
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', creatureIcons.Rooster, 0, 2, [{ name: 'small avian soul', icon: di.SmallSoul }, { name: 'small feather', icon: di.SmallFeather }]), 
        turkey: new EnemyType('Turkey', 'avian', creatureIcons.Turkey, 3, 5, [{ name: 'small avian soul', icon: di.SmallSoul }, { name: 'small feather', icon: di.SmallFeather }]),  
        stork: new EnemyType('Stork', 'avian', creatureIcons.Stork, 6, 8, [{ name: 'small avian soul', icon: di.SmallSoul }, { name: 'small feather', icon: di.SmallFeather }]),  
        owl: new EnemyType('Owl', 'avian', creatureIcons.Owl, 9, 11, [{ name: 'medium avian soul', icon: di.MediumSoul }, { name: 'medium feather', icon: di.MediumFeather }]),  
        falcon: new EnemyType('Falcon', 'avian', creatureIcons.Falcon, 12, 14, [{ name: 'medium avian soul', icon: di.MediumSoul }, { name: 'medium feather', icon: di.MediumFeather }]), 
        vulture: new EnemyType('Vulture', 'avian', creatureIcons.Vulture, 15, 17, [{ name: 'medium avian soul', icon: di.MediumSoul }, { name: 'medium feather', icon: di.MediumFeather }]), 
        hawk: new EnemyType('Hawk', 'avian', creatureIcons.Hawk, 18, 21, [{ name: 'medium avian soul', icon: di.MediumSoul }, { name: 'medium feather', icon: di.MediumFeather }]),  
        microraptor: new EnemyType('Microraptor', 'avian', creatureIcons.Microraptor, 22, 26, [{ name: 'large avian soul', icon: di.LargeSoul }, { name: 'large feather', icon: di.LargeFeather }]),
        pterodactyl: new EnemyType('Rooster', 'avian', creatureIcons.Pterodactyl, 27, 30, [{ name: 'large avian soul', icon: di.LargeSoul }, { name: 'large feather', icon: di.LargeFeather }]), 
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', creatureIcons.Magyarosaurus, 0, 3, [{ name: 'small dinosaur soul', icon: di.SmallSoul }, { name: 'small fossil', icon: di.SmallFossil }]),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', creatureIcons.Epidexipteryx, 4, 7, [{ name: 'small dinosaur soul', icon: di.SmallSoul }, { name: 'small fossil', icon: di.SmallFossil }]),
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', creatureIcons.Camarosaurus, 8, 10, [{ name: 'small dinosaur soul', icon: di.SmallSoul }, { name: 'small fossil', icon: di.SmallFossil }]),
        dilong: new EnemyType('Dilong', 'dinosaur', creatureIcons.Dilong, 11, 13, [{ name: 'medium dinosaur soul', icon: di.MediumSoul }, { name: 'medium fossil', icon: di.MediumFossil }]),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', creatureIcons.Centrosaurus, 14, 16, [{ name: 'medium dinosaur soul', icon: di.MediumSoul }, { name: 'medium fossil', icon: di.MediumFossil }]),
        guanlong: new EnemyType('Guanlong', 'dinosaur', creatureIcons.Guanlong, 17, 19, [{ name: 'medium dinosaur soul', icon: di.MediumSoul }, { name: 'medium fossil', icon: di.MediumFossil }]), 
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', creatureIcons.Monoclonius, 20, 22, [{ name: 'medium dinosaur soul', icon: di.MediumSoul }, { name: 'medium fossil', icon: di.MediumFossil }]),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', creatureIcons.Gorgosaurus, 23, 25, [{ name: 'large dinosaur soul', icon: di.LargeSoul }, { name: 'large fossil', icon: di.LargeFossil }]), 
        irritator: new EnemyType('Irritator', 'dinosaur', creatureIcons.Irritator, 26, 28, [{ name: 'large dinosaur soul', icon: di.LargeSoul }, { name: 'large fossil', icon: di.LargeFossil }]), 
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', creatureIcons.Tyrannosaurus, 29, 30, [{ name: 'large dinosaur soul', icon: di.LargeSoul }, { name: 'large fossil', icon: di.LargeFossil }]),
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', creatureIcons.Cockroach, 0, 2, [{ name: 'small insect soul', icon: di.SmallSoul }, { name: 'weak poison', icon: di.WeakPoison }]), 
        beetle: new EnemyType('Beetle', 'insect', creatureIcons.Beetle, 3, 4, [{ name: 'small insect soul', icon: di.SmallSoul }, { name: 'weak poison', icon: di.WeakPoison }]),  
        mosquito: new EnemyType('Mosquito', 'insect', creatureIcons.Mosquito, 5, 6, [{ name: 'small insect soul', icon: di.SmallSoul }, { name: 'weak poison', icon: di.WeakPoison }]), 
        spider: new EnemyType('Spider', 'insect', creatureIcons.Spider, 7, 8, [{ name: 'small insect soul', icon: di.SmallSoul }, { name: 'weak poison', icon: di.WeakPoison }]),  
        dragonfly: new EnemyType('Dragonfly', 'insect', creatureIcons.Dragonfly, 9, 10, [{ name: 'medium insect soul', icon: di.MediumSoul }, { name: 'medium poison', icon: di.MediumPoison }]), 
        chalcosoma: new EnemyType('Chalcosoma', 'insect', creatureIcons.Chalcosoma, 11, 14, [{ name: 'medium insect soul', icon: di.MediumSoul }, { name: 'medium poison', icon: di.MediumPoison }]),    
        tarantula: new EnemyType('Tarantula', 'insect', creatureIcons.Tarantula, 15, 19, [{ name: 'medium insect soul', icon: di.MediumSoul }, { name: 'medium poison', icon: di.MediumPoison }]), 
        scorpion: new EnemyType('Scorpion', 'insect', creatureIcons.Scorpion, 20, 25, [{ name: 'large insect soul', icon: di.LargeSoul }, { name: 'strong poison', icon: di.StrongPoison }]),
        millipede: new EnemyType('Millipede', 'insect', creatureIcons.Millipede, 25, 30, [{ name: 'large insect soul', icon: di.LargeSoul }, { name: 'strong poison', icon: di.StrongPoison }]),
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', creatureIcons.Deer, 0, 3, [{ name: 'small wildlife soul', icon: di.SmallSoul }, { name: 'soft wildlife leather', icon: di.SoftLeather }]),
        rat: new EnemyType('Rat', 'wildlife', creatureIcons.Rat, 4, 6, [{ name: 'small wildlife soul', icon: di.SmallSoul }, { name: 'soft wildlife leather', icon: di.SoftLeather }]),
        fox: new EnemyType('Fox', 'wildlife', creatureIcons.Fox, 7, 9, [{ name: 'small wildlife soul', icon: di.SmallSoul }, { name: 'soft wildlife leather', icon: di.SoftLeather }]), 
        boar: new EnemyType('Boar', 'wildlife', creatureIcons.Boar, 10, 11, [{ name: 'medium wildlife soul', icon: di.MediumSoul }, { name: 'medium wildlife leather', icon: di.MediumLeather }]),
        buffalo: new EnemyType('Buffalo', 'wildlife', creatureIcons.Buffalo, 12, 14, [{ name: 'medium wildlife soul', icon: di.MediumSoul }, { name: 'medium wildlife leather', icon: di.MediumLeather }]),
        bull: new EnemyType('Bull', 'wildlife', creatureIcons.Bull, 15, 17, [{ name: 'medium wildlife soul', icon: di.MediumSoul }, { name: 'medium wildlife leather', icon: di.MediumLeather }]),
        bear: new EnemyType('Bear', 'wildlife', creatureIcons.Bear, 18, 20, [{ name: 'medium wildlife soul', icon: di.MediumSoul }, { name: 'medium wildlife leather', icon: di.MediumLeather }]),
        lion: new EnemyType('Lion', 'wildlife', creatureIcons.Lion, 21, 23, [{ name: 'large wildlife soul', icon: di.LargeSoul }, { name: 'tough wildlife leather', icon: di.ToughLeather }]),
        rhino: new EnemyType('Rhino', 'wildlife', creatureIcons.Rhino, 24, 26, [{ name: 'large wildlife soul', icon: di.LargeSoul }, { name: 'tough wildlife leather', icon: di.ToughLeather }]),
        mammoth: new EnemyType('Mammoth', 'wildlife', creatureIcons.Mammoth, 27, 28, [{ name: 'large wildlife soul', icon: di.LargeSoul }, { name: 'tough wildlife leather', icon: di.ToughLeather }]),
        tiger: new EnemyType('Tiger', 'wildlife', creatureIcons.Tiger, 29, 30, [{ name: 'large wildlife soul', icon: di.LargeSoul }, { name: 'tough wildlife leather', icon: di.ToughLeather }]),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', creatureIcons.Gecko, 0, 3, [{ name: 'small reptile soul', icon: di.SmallSoul }, { name: 'soft reptile leather', icon: di.SoftLeather }]), 
        chameleon: new EnemyType('Chameleon', 'reptile', creatureIcons.Chameleon, 4, 7, [{ name: 'small reptile soul', icon: di.SmallSoul }, { name: 'soft reptile leather', icon: di.SoftLeather }]),  
        turtle: new EnemyType('Turtle', 'reptile', creatureIcons.Turtle, 8, 9, [{ name: 'small reptile soul', icon: di.SmallSoul }, { name: 'soft reptile leather', icon: di.SoftLeather }]),  
        iguana: new EnemyType('Iguana', 'reptile', creatureIcons.Iguana, 10, 12, [{ name: 'medium reptile soul', icon: di.MediumSoul }, { name: 'medium reptile leather', icon: di.MediumLeather }]),
        python: new EnemyType('Python', 'reptile', creatureIcons.Python, 13, 16, [{ name: 'medium reptile soul', icon: di.MediumSoul }, { name: 'medium reptile leather', icon: di.MediumLeather }]),
        crocodile: new EnemyType('Crocodile', 'reptile', creatureIcons.Crocodile, 17, 21, [{ name: 'medium reptile soul', icon: di.MediumSoul }, { name: 'medium reptile leather', icon: di.MediumLeather }]),
        cobra: new EnemyType('Cobra', 'reptile', creatureIcons.Cobra, 22, 26, [{ name: 'large reptile soul', icon: di.LargeSoul }, { name: 'tough reptile leather', icon: di.ToughLeather }]),
        dragon: new EnemyType('Dragon', 'reptile', creatureIcons.Dragon, 27, 30, [{ name: 'large reptile soul', icon: di.LargeSoul }, { name: 'tough reptile leather', icon: di.ToughLeather }]),
    },
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', creatureIcons.Balloonfish, 0, 4, [{ name: 'small aquatic soul', icon: di.SmallSoul }, { name: 'small aquatic meat', icon: di.SmallMeat }]),
        ray: new EnemyType('Ray', 'aquatic', creatureIcons.Ray, 5, 9, [{ name: 'small aquatic soul', icon: di.SmallSoul }, { name: 'small aquatic meat', icon: di.SmallMeat }]), 
        anglerfish: new EnemyType('Anglerfish', 'aquatic', creatureIcons.Anglerfish, 10, 14, [{ name: 'medium aquatic soul', icon: di.MediumSoul }, { name: 'medium aquatic meat', icon: di.MediumMeat }]), 
        goliath: new EnemyType('Goliath', 'aquatic', creatureIcons.Goliath, 15, 17, [{ name: 'medium aquatic soul', icon: di.MediumSoul }, { name: 'medium aquatic meat', icon: di.MediumMeat }]),
        hammerhead: new EnemyType('Hammerhead', 'aquatic', creatureIcons.Hammerhead, 18, 21, [{ name: 'medium aquatic soul', icon: di.MediumSoul }, { name: 'medium aquatic meat', icon: di.MediumMeat }]),
        merlin: new EnemyType('Merlin', 'aquatic', creatureIcons.Merlin, 22, 24, [{ name: 'large aquatic soul', icon: di.LargeSoul }, { name: 'large aquatic meat', icon: di.LargeMeat }]),
        shark: new EnemyType('Shark', 'aquatic', creatureIcons.Shark, 25, 27, [{ name: 'large aquatic soul', icon: di.LargeSoul }, { name: 'large aquatic meat', icon: di.LargeMeat }]), 
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', creatureIcons.Elasmosaurus, 28, 29, [{ name: 'large aquatic soul', icon: di.LargeSoul }, { name: 'large aquatic meat', icon: di.LargeMeat }]),
        kraken: new EnemyType('Kraken', 'aquatic', creatureIcons.Kraken, 30, 30, [{ name: 'large aquatic soul', icon: di.LargeSoul }, { name: 'large aquatic meat', icon: di.LargeMeat }]),
    }
}

export default possibleEnemies