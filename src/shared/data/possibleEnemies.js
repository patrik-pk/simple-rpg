import creatureIcons from './icons/creatureIcons'
import possibleDrops from './possibleDrops'

// Destructure
const {
    aquatic: aq,
    avians: avi,
    dinosaurs: dino,
    insect: ins,
    wildlife: wf,
    reptiles: rt,
} = possibleDrops

const {
    aquatic,
    avian,
    dinosaur,
    insect,
    wildlife,
    reptile,
} = creatureIcons

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
    // Aquatic
    aquatic: {
        balloonfish: new EnemyType('Balloonfish', 'aquatic', aquatic.balloonfish.icon, 0, 4, [aq.smallSoul, aq.smallMeat]),
        ray: new EnemyType('Ray', 'aquatic', aquatic.ray.icon, 5, 9, [aq.smallSoul, aq.smallMeat]),
        anglerfish: new EnemyType('Anglerfish', 'aquatic', aquatic.anglerfish.icon, 10, 14, [aq.mediumSoul, aq.mediumMeat]),
        goliath: new EnemyType('Goliath', 'aquatic', aquatic.goliath.icon, 15, 17, [aq.mediumSoul, aq.mediumMeat]),
        hammerhead: new EnemyType('Hammerhead', 'aquatic', aquatic.hammerhead.icon, 18, 21, [aq.mediumSoul, aq.mediumMeat]),
        merlin: new EnemyType('Merlin', 'aquatic', aquatic.merlin.icon, 22, 24, [aq.largeSoul, aq.largeMeat]),
        shark: new EnemyType('Shark', 'aquatic', aquatic.shark.icon, 25, 27, [aq.largeSoul, aq.largeMeat]),
        elasmosaurus: new EnemyType('Elasmosaurus', 'aquatic', aquatic.elasmosaurus.icon, 28, 29, [aq.largeSoul, aq.largeMeat]),
        kraken: new EnemyType('Kraken', 'aquatic', aquatic.kraken.icon, 30, 30, [aq.largeSoul, aq.largeMeat]),
    },
    // Avians
    avians: {
        rooster: new EnemyType('Rooster', 'avian', avian.rooster.icon, 0, 2, [avi.smallSoul, avi.smallFeather]), 
        turkey: new EnemyType('Turkey', 'avian', avian.turkey.icon, 3, 5, [avi.smallSoul, avi.smallFeather]),  
        stork: new EnemyType('Stork', 'avian', avian.stork.icon, 6, 8, [avi.smallSoul, avi.smallFeather]),  
        owl: new EnemyType('Owl', 'avian', avian.owl.icon, 9, 11, [avi.mediumSoul, avi.mediumFeather]),  
        falcon: new EnemyType('Falcon', 'avian', avian.falcon.icon, 12, 14, [avi.mediumSoul, avi.mediumFeather]), 
        vulture: new EnemyType('Vulture', 'avian', avian.vulture.icon, 15, 17, [avi.mediumSoul, avi.mediumFeather]), 
        hawk: new EnemyType('Hawk', 'avian', avian.hawk.icon, 18, 21, [avi.mediumSoul, avi.mediumFeather]),  
        microraptor: new EnemyType('Microraptor', 'avian', avian.microraptor.icon, 22, 26, [avi.largeSoul, avi.largeFeather]),
        pterodactyl: new EnemyType('Pterodactyl', 'avian', avian.pterodactyl.icon, 27, 30, [avi.largeSoul, avi.largeFeather]), 
    },
    // Dinosaurs
    dinosaurs: {
        magyarosaurus: new EnemyType('Magyarosaurus', 'dinosaur', dinosaur.magyarosaurus.icon, 0, 3, [dino.smallSoul, dino.smallFossil]),
        epidexipteryx: new EnemyType('Epidexipteryx', 'dinosaur', dinosaur.epidexipteryx.icon, 4, 7, [dino.smallSoul, dino.smallFossil]),
        camarosaurus: new EnemyType('Camarosaurus', 'dinosaur', dinosaur.camarosaurus.icon, 8, 10, [dino.smallSoul, dino.smallFossil]),
        dilong: new EnemyType('Dilong', 'dinosaur', dinosaur.dilong.icon, 11, 13, [dino.mediumSoul, dino.mediumFossil]),
        centrosaurus: new EnemyType('Centrosaurus', 'dinosaur', dinosaur.centrosaurus.icon, 14, 16, [dino.mediumSoul, dino.mediumFossil]),
        guanlong: new EnemyType('Guanlong', 'dinosaur', dinosaur.guanlong.icon, 17, 19, [dino.mediumSoul, dino.mediumFossil]), 
        monoclonius: new EnemyType('Monoclonius', 'dinosaur', dinosaur.monoclonius.icon, 20, 22, [dino.mediumSoul, dino.mediumFossil]),
        gorgosaurus: new EnemyType('Gorgosaurus', 'dinosaur', dinosaur.gorgosaurus.icon, 23, 25, [dino.largeSoul, dino.largeFossil]), 
        irritator: new EnemyType('Irritator', 'dinosaur', dinosaur.irritator.icon, 26, 28, [dino.largeSoul, dino.largeFossil]), 
        tyrannosaurus: new EnemyType('T-Rex', 'dinosaur', dinosaur.tyrannosaurus.icon, 29, 30, [dino.largeSoul, dino.largeFossil]),
    },
    // Insect
    insect: {
        cockroach: new EnemyType('Cockroach', 'insect', insect.cockroach.icon, 0, 2, [ins.smallSoul, ins.weakPoison]), 
        beetle: new EnemyType('Beetle', 'insect', insect.beetle.icon, 3, 4, [ins.smallSoul, ins.weakPoison]),  
        mosquito: new EnemyType('Mosquito', 'insect', insect.mosquito.icon, 5, 6, [ins.smallSoul, ins.weakPoison]), 
        spider: new EnemyType('Spider', 'insect', insect.spider.icon, 7, 8, [ins.smallSoul, ins.weakPoison]),  
        dragonfly: new EnemyType('Dragonfly', 'insect', insect.dragonfly.icon, 9, 10, [ins.mediumSoul, ins.mediumPoison]), 
        chalcosoma: new EnemyType('Chalcosoma', 'insect', insect.chalcosoma.icon, 11, 14, [ins.mediumSoul, ins.mediumPoison]),    
        tarantula: new EnemyType('Tarantula', 'insect', insect.tarantula.icon, 15, 19, [ins.mediumSoul, ins.mediumPoison]), 
        scorpion: new EnemyType('Scorpion', 'insect', insect.scorpion.icon, 20, 25, [ins.largeSoul, ins.strongPoison]),
        millipede: new EnemyType('Millipede', 'insect', insect.millipede.icon, 25, 30, [ins.largeSoul, ins.strongPoison]),
    },
    // Wildlife
    wildlife: {
        deer: new EnemyType('Deer', 'wildlife', wildlife.deer.icon, 0, 3, [wf.smallSoul, wf.softLeather]),
        rat: new EnemyType('Rat', 'wildlife', wildlife.rat.icon, 4, 6, [wf.smallSoul, wf.softLeather]),
        fox: new EnemyType('Fox', 'wildlife', wildlife.fox.icon, 7, 9, [wf.smallSoul, wf.softLeather]), 
        boar: new EnemyType('Boar', 'wildlife', wildlife.boar.icon, 10, 11, [wf.mediumSoul, wf.mediumLeather]),
        buffalo: new EnemyType('Buffalo', 'wildlife', wildlife.buffalo.icon, 12, 14, [wf.mediumSoul, wf.mediumLeather]),
        bull: new EnemyType('Bull', 'wildlife', wildlife.bull.icon, 15, 17, [wf.mediumSoul, wf.mediumLeather]),
        bear: new EnemyType('Bear', 'wildlife', wildlife.bear.icon, 18, 20, [wf.mediumSoul, wf.mediumLeather]),
        lion: new EnemyType('Lion', 'wildlife', wildlife.lion.icon, 21, 23, [wf.largeSoul, wf.toughLeather]),
        rhino: new EnemyType('Rhino', 'wildlife', wildlife.rhino.icon, 24, 26, [wf.largeSoul, wf.toughLeather]),
        mammoth: new EnemyType('Mammoth', 'wildlife', wildlife.mammoth.icon, 27, 28, [wf.largeSoul, wf.toughLeather]),
        tiger: new EnemyType('Tiger', 'wildlife', wildlife.tiger.icon, 29, 30, [wf.largeSoul, wf.toughLeather]),
    },
    // Reptiles
    reptiles: {
        gecko: new EnemyType('Gecko', 'reptile', reptile.gecko.icon, 0, 3, [rt.smallSoul, rt.softLeather]), 
        chameleon: new EnemyType('Chameleon', 'reptile', reptile.chameleon.icon, 4, 7, [rt.smallSoul, rt.softLeather]),  
        turtle: new EnemyType('Turtle', 'reptile', reptile.turtle.icon, 8, 9, [rt.smallSoul, rt.softLeather]),  
        iguana: new EnemyType('Iguana', 'reptile', reptile.iguana.icon, 10, 12, [rt.mediumSoul, rt.mediumLeather]),
        python: new EnemyType('Python', 'reptile', reptile.python.icon, 13, 16, [rt.mediumSoul, rt.mediumLeather]),
        crocodile: new EnemyType('Crocodile', 'reptile', reptile.crocodile.icon, 17, 21, [rt.mediumSoul, rt.mediumLeather]),
        cobra: new EnemyType('Cobra', 'reptile', reptile.cobra.icon, 22, 26, [rt.largeSoul, rt.toughLeather]),
        dragon: new EnemyType('Dragon', 'reptile', reptile.dragon.icon, 27, 30, [rt.largeSoul, rt.toughLeather]),
    },
}

export default possibleEnemies