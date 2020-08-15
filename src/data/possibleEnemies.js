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
        rooster: new EnemyType('Rooster', 'avian', creatureIcons.Rooster, 0, 2, [{ name: 'small avian soul', icon: di.SmallSoul, classVal: 'avian-soul' }, { name: 'small feather', icon: di.SmallFeather, classVal: 'feather' }]), 
        turkey: new EnemyType('Turkey', 'avian', creatureIcons.Turkey, 3, 5, [{ name: 'small avian soul', icon: di.SmallSoul, classVal: 'avian-soul' }, { name: 'small feather', icon: di.SmallFeather, classVal: 'feather' }]),  
        stork: new EnemyType('Stork', 'avian', creatureIcons.Stork, 6, 8, [{ name: 'small avian soul', icon: di.SmallSoul, classVal: 'avian-soul' }, { name: 'small feather', icon: di.SmallFeather, classVal: 'feather' }]),  
        owl: new EnemyType('Owl', 'avian', creatureIcons.Owl, 9, 11, [{ name: 'medium avian soul', icon: di.MediumSoul, classVal: 'avian-soul' }, { name: 'medium feather', icon: di.MediumFeather, classVal: 'feather' }]),  
        falcon: new EnemyType('Falcon', 'avian', creatureIcons.Falcon, 12, 14, [{ name: 'medium avian soul', icon: di.MediumSoul, classVal: 'avian-soul' }, { name: 'medium feather', icon: di.MediumFeather, classVal: 'feather' }]), 
        vulture: new EnemyType('Vulture', 'avian', creatureIcons.Vulture, 15, 17, [{ name: 'medium avian soul', icon: di.MediumSoul, classVal: 'avian-soul' }, { name: 'medium feather', icon: di.MediumFeather, classVal: 'feather' }]), 
        hawk: new EnemyType('Hawk', 'avian', creatureIcons.Hawk, 18, 21, [{ name: 'medium avian soul', icon: di.MediumSoul, classVal: 'avian-soul' }, { name: 'medium feather', icon: di.MediumFeather, classVal: 'feather' }]),  
        microraptor: new EnemyType('Microraptor', 'avian', creatureIcons.Microraptor, 22, 26, [{ name: 'large avian soul', icon: di.LargeSoul, classVal: 'avian-soul' }, { name: 'large feather', icon: di.LargeFeather, classVal: 'feather' }]),
        pterodactyl: new EnemyType('Rooster', 'avian', creatureIcons.Pterodactyl, 27, 30, [{ name: 'large avian soul', icon: di.LargeSoul, classVal: 'avian-soul' }, { name: 'large feather', icon: di.LargeFeather, classVal: 'feather' }]), 
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', creatureIcons.Magyarosaurus, 0, 3, [{ name: 'small dinosaur soul', icon: di.SmallSoul, classVal: 'dinosaur-soul' }, { name: 'small fossil', icon: di.SmallFossil, classVal: 'fossil' }]),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', creatureIcons.Epidexipteryx, 4, 7, [{ name: 'small dinosaur soul', icon: di.SmallSoul, classVal: 'dinosaur-soul' }, { name: 'small fossil', icon: di.SmallFossil, classVal: 'fossil' }]),
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', creatureIcons.Camarosaurus, 8, 10, [{ name: 'small dinosaur soul', icon: di.SmallSoul, classVal: 'dinosaur-soul' }, { name: 'small fossil', icon: di.SmallFossil, classVal: 'fossil' }]),
        dilong: new EnemyType('Dilong', 'dinosaur', creatureIcons.Dilong, 11, 13, [{ name: 'medium dinosaur soul', icon: di.MediumSoul, classVal: 'dinosaur-soul' }, { name: 'medium fossil', icon: di.MediumFossil, classVal: 'fossil' }]),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', creatureIcons.Centrosaurus, 14, 16, [{ name: 'medium dinosaur soul', icon: di.MediumSoul, classVal: 'dinosaur-soul' }, { name: 'medium fossil', icon: di.MediumFossil, classVal: 'fossil' }]),
        guanlong: new EnemyType('Guanlong', 'dinosaur', creatureIcons.Guanlong, 17, 19, [{ name: 'medium dinosaur soul', icon: di.MediumSoul, classVal: 'dinosaur-soul' }, { name: 'medium fossil', icon: di.MediumFossil, classVal: 'fossil' }]), 
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', creatureIcons.Monoclonius, 20, 22, [{ name: 'medium dinosaur soul', icon: di.MediumSoul, classVal: 'dinosaur-soul' }, { name: 'medium fossil', icon: di.MediumFossil, classVal: 'fossil' }]),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', creatureIcons.Gorgosaurus, 23, 25, [{ name: 'large dinosaur soul', icon: di.LargeSoul, classVal: 'dinosaur-soul' }, { name: 'large fossil', icon: di.LargeFossil, classVal: 'fossil' }]), 
        irritator: new EnemyType('Irritator', 'dinosaur', creatureIcons.Irritator, 26, 28, [{ name: 'large dinosaur soul', icon: di.LargeSoul, classVal: 'dinosaur-soul' }, { name: 'large fossil', icon: di.LargeFossil, classVal: 'fossil' }]), 
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', creatureIcons.Tyrannosaurus, 29, 30, [{ name: 'large dinosaur soul', icon: di.LargeSoul, classVal: 'dinosaur-soul' }, { name: 'large fossil', icon: di.LargeFossil, classVal: 'fossil' }]),
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', creatureIcons.Cockroach, 0, 2, [{ name: 'small insect soul', icon: di.SmallSoul, classVal: 'insect-soul' }, { name: 'weak poison', icon: di.WeakPoison, classVal: 'poison' }]), 
        beetle: new EnemyType('Beetle', 'insect', creatureIcons.Beetle, 3, 4, [{ name: 'small insect soul', icon: di.SmallSoul, classVal: 'insect-soul' }, { name: 'weak poison', icon: di.WeakPoison, classVal: 'poison' }]),  
        mosquito: new EnemyType('Mosquito', 'insect', creatureIcons.Mosquito, 5, 6, [{ name: 'small insect soul', icon: di.SmallSoul, classVal: 'insect-soul' }, { name: 'weak poison', icon: di.WeakPoison, classVal: 'poison' }]), 
        spider: new EnemyType('Spider', 'insect', creatureIcons.Spider, 7, 8, [{ name: 'small insect soul', icon: di.SmallSoul, classVal: 'insect-soul' }, { name: 'weak poison', icon: di.WeakPoison, classVal: 'poison' }]),  
        dragonfly: new EnemyType('Dragonfly', 'insect', creatureIcons.Dragonfly, 9, 10, [{ name: 'medium insect soul', icon: di.MediumSoul, classVal: 'insect-soul' }, { name: 'medium poison', icon: di.MediumPoison, classVal: 'poison' }]), 
        chalcosoma: new EnemyType('Chalcosoma', 'insect', creatureIcons.Chalcosoma, 11, 14, [{ name: 'medium insect soul', icon: di.MediumSoul, classVal: 'insect-soul' }, { name: 'medium poison', icon: di.MediumPoison, classVal: 'poison' }]),    
        tarantula: new EnemyType('Tarantula', 'insect', creatureIcons.Tarantula, 15, 19, [{ name: 'medium insect soul', icon: di.MediumSoul, classVal: 'insect-soul' }, { name: 'medium poison', icon: di.MediumPoison, classVal: 'poison' }]), 
        scorpion: new EnemyType('Scorpion', 'insect', creatureIcons.Scorpion, 20, 25, [{ name: 'large insect soul', icon: di.LargeSoul, classVal: 'insect-soul' }, { name: 'strong poison', icon: di.StrongPoison, classVal: 'poison' }]),
        millipede: new EnemyType('Millipede', 'insect', creatureIcons.Millipede, 25, 30, [{ name: 'large insect soul', icon: di.LargeSoul, classVal: 'insect-soul' }, { name: 'strong poison', icon: di.StrongPoison, classVal: 'poison' }]),
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', creatureIcons.Deer, 0, 3, [{ name: 'small wildlife soul', icon: di.SmallSoul, classVal: 'wildlife-soul' }, { name: 'soft wildlife leather', icon: di.SoftLeather, classVal: 'wildlife-leather' }]),
        rat: new EnemyType('Rat', 'wildlife', creatureIcons.Rat, 4, 6, [{ name: 'small wildlife soul', icon: di.SmallSoul, classVal: 'wildlife-soul' }, { name: 'soft wildlife leather', icon: di.SoftLeather, classVal: 'wildlife-leather' }]),
        fox: new EnemyType('Fox', 'wildlife', creatureIcons.Fox, 7, 9, [{ name: 'small wildlife soul', icon: di.SmallSoul, classVal: 'wildlife-soul' }, { name: 'soft wildlife leather', icon: di.SoftLeather, classVal: 'wildlife-leather' }]), 
        boar: new EnemyType('Boar', 'wildlife', creatureIcons.Boar, 10, 11, [{ name: 'medium wildlife soul', icon: di.MediumSoul, classVal: 'wildlife-soul' }, { name: 'medium wildlife leather', icon: di.MediumLeather, classVal: 'wildlife-leather' }]),
        buffalo: new EnemyType('Buffalo', 'wildlife', creatureIcons.Buffalo, 12, 14, [{ name: 'medium wildlife soul', icon: di.MediumSoul, classVal: 'wildlife-soul' }, { name: 'medium wildlife leather', icon: di.MediumLeather, classVal: 'wildlife-leather' }]),
        bull: new EnemyType('Bull', 'wildlife', creatureIcons.Bull, 15, 17, [{ name: 'medium wildlife soul', icon: di.MediumSoul, classVal: 'wildlife-soul' }, { name: 'medium wildlife leather', icon: di.MediumLeather, classVal: 'wildlife-leather' }]),
        bear: new EnemyType('Bear', 'wildlife', creatureIcons.Bear, 18, 20, [{ name: 'medium wildlife soul', icon: di.MediumSoul, classVal: 'wildlife-soul' }, { name: 'medium wildlife leather', icon: di.MediumLeather, classVal: 'wildlife-leather' }]),
        lion: new EnemyType('Lion', 'wildlife', creatureIcons.Lion, 21, 23, [{ name: 'large wildlife soul', icon: di.LargeSoul, classVal: 'wildlife-soul' }, { name: 'tough wildlife leather', icon: di.ToughLeather, classVal: 'wildlife-leather' }]),
        rhino: new EnemyType('Rhino', 'wildlife', creatureIcons.Rhino, 24, 26, [{ name: 'large wildlife soul', icon: di.LargeSoul, classVal: 'wildlife-soul' }, { name: 'tough wildlife leather', icon: di.ToughLeather, classVal: 'wildlife-leather' }]),
        mammoth: new EnemyType('Mammoth', 'wildlife', creatureIcons.Mammoth, 27, 28, [{ name: 'large wildlife soul', icon: di.LargeSoul, classVal: 'wildlife-soul' }, { name: 'tough wildlife leather', icon: di.ToughLeather, classVal: 'wildlife-leather' }]),
        tiger: new EnemyType('Tiger', 'wildlife', creatureIcons.Tiger, 29, 30, [{ name: 'large wildlife soul', icon: di.LargeSoul, classVal: 'wildlife-soul' }, { name: 'tough wildlife leather', icon: di.ToughLeather, classVal: 'wildlife-leather' }]),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', creatureIcons.Gecko, 0, 3, [{ name: 'small reptile soul', icon: di.SmallSoul, classVal: 'reptile-soul' }, { name: 'soft reptile leather', icon: di.SoftLeather, classVal: 'reptile-leather' }]), 
        chameleon: new EnemyType('Chameleon', 'reptile', creatureIcons.Chameleon, 4, 7, [{ name: 'small reptile soul', icon: di.SmallSoul, classVal: 'reptile-soul' }, { name: 'soft reptile leather', icon: di.SoftLeather, classVal: 'reptile-leather' }]),  
        turtle: new EnemyType('Turtle', 'reptile', creatureIcons.Turtle, 8, 9, [{ name: 'small reptile soul', icon: di.SmallSoul, classVal: 'reptile-soul' }, { name: 'soft reptile leather', icon: di.SoftLeather, classVal: 'reptile-leather' }]),  
        iguana: new EnemyType('Iguana', 'reptile', creatureIcons.Iguana, 10, 12, [{ name: 'medium reptile soul', icon: di.MediumSoul, classVal: 'reptile-soul' }, { name: 'medium reptile leather', icon: di.MediumLeather, classVal: 'reptile-leather' }]),
        python: new EnemyType('Python', 'reptile', creatureIcons.Python, 13, 16, [{ name: 'medium reptile soul', icon: di.MediumSoul, classVal: 'reptile-soul' }, { name: 'medium reptile leather', icon: di.MediumLeather, classVal: 'reptile-leather' }]),
        crocodile: new EnemyType('Crocodile', 'reptile', creatureIcons.Crocodile, 17, 21, [{ name: 'medium reptile soul', icon: di.MediumSoul, classVal: 'reptile-soul' }, { name: 'medium reptile leather', icon: di.MediumLeather, classVal: 'reptile-leather' }]),
        cobra: new EnemyType('Cobra', 'reptile', creatureIcons.Cobra, 22, 26, [{ name: 'large reptile soul', icon: di.LargeSoul, classVal: 'reptile-soul' }, { name: 'tough reptile leather', icon: di.ToughLeather, classVal: 'reptile-leather' }]),
        dragon: new EnemyType('Dragon', 'reptile', creatureIcons.Dragon, 27, 30, [{ name: 'large reptile soul', icon: di.LargeSoul, classVal: 'reptile-soul' }, { name: 'tough reptile leather', icon: di.ToughLeather, classVal: 'reptile-leather' }]),
    },
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', creatureIcons.Balloonfish, 0, 4, [{ name: 'small aquatic soul', icon: di.SmallSoul, classVal: 'aquatic-soul' }, { name: 'small aquatic meat', icon: di.SmallMeat, classVal: 'aqua-meat' }]),
        ray: new EnemyType('Ray', 'aquatic', creatureIcons.Ray, 5, 9, [{ name: 'small aquatic soul', icon: di.SmallSoul, classVal: 'aquatic-soul' }, { name: 'small aquatic meat', icon: di.SmallMeat, classVal: 'aqua-meat' }]), 
        anglerfish: new EnemyType('Anglerfish', 'aquatic', creatureIcons.Anglerfish, 10, 14, [{ name: 'medium aquatic soul', icon: di.MediumSoul, classVal: 'aquatic-soul' }, { name: 'medium aquatic meat', icon: di.MediumMeat, classVal: 'aqua-meat' }]), 
        goliath: new EnemyType('Goliath', 'aquatic', creatureIcons.Goliath, 15, 17, [{ name: 'medium aquatic soul', icon: di.MediumSoul, classVal: 'aquatic-soul' }, { name: 'medium aquatic meat', icon: di.MediumMeat, classVal: 'aqua-meat' }]),
        hammerhead: new EnemyType('Hammerhead', 'aquatic', creatureIcons.Hammerhead, 18, 21, [{ name: 'medium aquatic soul', icon: di.MediumSoul, classVal: 'aquatic-soul' }, { name: 'medium aquatic meat', icon: di.MediumMeat, classVal: 'aqua-meat' }]),
        merlin: new EnemyType('Merlin', 'aquatic', creatureIcons.Merlin, 22, 24, [{ name: 'large aquatic soul', icon: di.LargeSoul, classVal: 'aquatic-soul' }, { name: 'large aquatic meat', icon: di.LargeMeat, classVal: 'aqua-meat' }]),
        shark: new EnemyType('Shark', 'aquatic', creatureIcons.Shark, 25, 27, [{ name: 'large aquatic soul', icon: di.LargeSoul, classVal: 'aquatic-soul' }, { name: 'large aquatic meat', icon: di.LargeMeat, classVal: 'aqua-meat' }]), 
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', creatureIcons.Elasmosaurus, 28, 29, [{ name: 'large aquatic soul', icon: di.LargeSoul, classVal: 'aquatic-soul' }, { name: 'large aquatic meat', icon: di.LargeMeat, classVal: 'aqua-meat' }]),
        kraken: new EnemyType('Kraken', 'aquatic', creatureIcons.Kraken, 30, 30, [{ name: 'large aquatic soul', icon: di.LargeSoul, classVal: 'aquatic-soul' }, { name: 'large aquatic meat', icon: di.LargeMeat, classVal: 'aqua-meat' }]),
    }
}

export default possibleEnemies