import di from './icons/dropIcons'

class PossibleDrop {
    constructor(name, icon, classVal, goldValue = 10) {
        this.name = name
        this.icon = icon
        this.classVal = classVal
        this.goldValue = goldValue
    }
}

const possibleDrops = {

    // aquatic
    aquatic: {
        smallSoul: new PossibleDrop('small aquatic soul', di.smallSoul.icon, 'aquatic-soul'),
        mediumSoul: new PossibleDrop('medium aquatic soul', di.mediumSoul.icon, 'aquatic-soul'),
        largeSoul: new PossibleDrop('large aquatic soul', di.largeSoul.icon, 'aquatic-soul'),
        smallMeat: new PossibleDrop('small aqua meat', di.smallMeat.icon, 'aqua-meat'),
        mediumMeat: new PossibleDrop('medium aqua meat', di.mediumMeat.icon, 'aqua-meat'),
        largeMeat: new PossibleDrop('large aqua meat', di.largeMeat.icon, 'aqua-meat'),
    },

    // avian
    avians: {
        smallSoul: new PossibleDrop('small avian soul', di.smallSoul.icon, 'avian-soul'),
        mediumSoul: new PossibleDrop('medium avian soul', di.mediumSoul.icon, 'avian-soul'),
        largeSoul: new PossibleDrop('large avian soul', di.largeSoul.icon, 'avian-soul'),
        smallFeather: new PossibleDrop('small feather', di.smallFeather.icon, 'feather'),
        mediumFeather: new PossibleDrop('medium feather', di.mediumFeather.icon, 'feather'),
        largeFeather: new PossibleDrop('large feather', di.largeFeather.icon, 'feather'),
    },

    // dinosaur
    dinosaurs: {
        smallSoul: new PossibleDrop('small dinosaur soul', di.smallSoul.icon, 'dinosaur-soul'),
        mediumSoul: new PossibleDrop('medium dinosaur soul', di.mediumSoul.icon, 'dinosaur-soul'),
        largeSoul: new PossibleDrop('large dinosaur soul', di.largeSoul.icon, 'dinosaur-soul'),
        smallFossil: new PossibleDrop('small fossil', di.smallFossil.icon, 'fossil'),
        mediumFossil: new PossibleDrop('medium fossil', di.mediumFossil.icon, 'fossil'),
        largeFossil: new PossibleDrop('large fossil', di.largeFossil.icon, 'fossil'),
    },

    // insect
    insect: {
        smallSoul: new PossibleDrop('small insect soul', di.smallSoul.icon, 'insect-soul'),
        mediumSoul: new PossibleDrop('medium insect soul', di.mediumSoul.icon, 'insect-soul'),
        largeSoul: new PossibleDrop('large insect soul', di.largeSoul.icon, 'insect-soul'),
        weakPoison: new PossibleDrop('weak poison', di.weakPoison.icon, 'poison'),
        mediumPoison: new PossibleDrop('medium poison', di.mediumPoison.icon, 'poison'),
        strongPoison: new PossibleDrop('strong poison', di.strongPoison.icon, 'poison'),
    },

    // wildlife
    wildlife: {
        smallSoul: new PossibleDrop('small wildlife soul', di.smallSoul.icon, 'wildlife-soul'),
        mediumSoul: new PossibleDrop('medium wildlife soul', di.mediumSoul.icon, 'wildlife-soul'),
        largeSoul: new PossibleDrop('large wildlife soul', di.largeSoul.icon, 'wildlife-soul'),
        softLeather: new PossibleDrop('soft wildlife leather', di.softLeather.icon, 'wildlife-leather'),
        mediumLeather: new PossibleDrop('medium wildlife leather', di.mediumLeather.icon, 'wildlife-leather'),
        toughLeather: new PossibleDrop('tough wildlife leather', di.toughLeather.icon, 'wildlife-leather'),
    },

    // reptile
    reptiles: {
        smallSoul: new PossibleDrop('small reptile soul', di.smallSoul.icon, 'reptile-soul'),
        mediumSoul: new PossibleDrop('medium reptile soul', di.mediumSoul.icon, 'reptile-soul'),
        largeSoul: new PossibleDrop('large reptile soul', di.largeSoul.icon, 'reptile-soul'),
        softLeather: new PossibleDrop('soft reptile leather', di.softLeather.icon, 'reptile-leather'),
        mediumLeather: new PossibleDrop('medium reptile leather', di.mediumLeather.icon, 'reptile-leather'),
        toughLeather: new PossibleDrop('tough reptile leather', di.toughLeather.icon, 'reptile-leather'),
    },
}

export default possibleDrops