import di from './icons/dropIcons'

class PossibleDrop {
    constructor(iconKey, name, icon, classVal, goldValue = 7.5) {
        this.iconKey = iconKey
        this.name = name
        this.icon = icon
        this.classVal = classVal
        this.goldValue = goldValue
    }
}

const possibleDrops = {

    // aquatic
    aquatic: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small aquatic soul', di.smallSoul.icon, 'aquatic-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium aquatic soul', di.mediumSoul.icon, 'aquatic-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large aquatic soul', di.largeSoul.icon, 'aquatic-soul'),
        smallMeat: new PossibleDrop(di.smallMeat.iconKey, 'small aqua meat', di.smallMeat.icon, 'aqua-meat'),
        mediumMeat: new PossibleDrop(di.mediumMeat.iconKey, 'medium aqua meat', di.mediumMeat.icon, 'aqua-meat'),
        largeMeat: new PossibleDrop(di.largeMeat.iconKey, 'large aqua meat', di.largeMeat.icon, 'aqua-meat'),
    },

    // avian
    avians: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small avian soul', di.smallSoul.icon, 'avian-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium avian soul', di.mediumSoul.icon, 'avian-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large avian soul', di.largeSoul.icon, 'avian-soul'),
        smallFeather: new PossibleDrop(di.smallFeather.iconKey, 'small feather', di.smallFeather.icon, 'feather'),
        mediumFeather: new PossibleDrop(di.mediumFeather.iconKey, 'medium feather', di.mediumFeather.icon, 'feather'),
        largeFeather: new PossibleDrop(di.largeFeather.iconKey, 'large feather', di.largeFeather.icon, 'feather'),
    },

    // dinosaur
    dinosaurs: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small dinosaur soul', di.smallSoul.icon, 'dinosaur-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium dinosaur soul', di.mediumSoul.icon, 'dinosaur-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large dinosaur soul', di.largeSoul.icon, 'dinosaur-soul'),
        smallFossil: new PossibleDrop(di.smallFossil.iconKey, 'small fossil', di.smallFossil.icon, 'fossil'),
        mediumFossil: new PossibleDrop(di.mediumFossil.iconKey, 'medium fossil', di.mediumFossil.icon, 'fossil'),
        largeFossil: new PossibleDrop(di.largeFossil.iconKey, 'large fossil', di.largeFossil.icon, 'fossil'),
    },

    // insect
    insect: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small insect soul', di.smallSoul.icon, 'insect-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium insect soul', di.mediumSoul.icon, 'insect-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large insect soul', di.largeSoul.icon, 'insect-soul'),
        weakPoison: new PossibleDrop(di.weakPoison.iconKey, 'weak poison', di.weakPoison.icon, 'poison'),
        mediumPoison: new PossibleDrop(di.mediumPoison.iconKey, 'medium poison', di.mediumPoison.icon, 'poison'),
        strongPoison: new PossibleDrop(di.strongPoison.iconKey, 'strong poison', di.strongPoison.icon, 'poison'),
    },

    // wildlife
    wildlife: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small wildlife soul', di.smallSoul.icon, 'wildlife-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium wildlife soul', di.mediumSoul.icon, 'wildlife-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large wildlife soul', di.largeSoul.icon, 'wildlife-soul'),
        softLeather: new PossibleDrop(di.softLeather.iconKey, 'soft wildlife leather', di.softLeather.icon, 'wildlife-leather'),
        mediumLeather: new PossibleDrop(di.mediumLeather.iconKey, 'medium wildlife leather', di.mediumLeather.icon, 'wildlife-leather'),
        toughLeather: new PossibleDrop(di.toughLeather.iconKey, 'tough wildlife leather', di.toughLeather.icon, 'wildlife-leather'),
    },

    // reptile
    reptiles: {
        smallSoul: new PossibleDrop(di.smallSoul.iconKey, 'small reptile soul', di.smallSoul.icon, 'reptile-soul'),
        mediumSoul: new PossibleDrop(di.mediumSoul.iconKey, 'medium reptile soul', di.mediumSoul.icon, 'reptile-soul'),
        largeSoul: new PossibleDrop(di.largeSoul.iconKey, 'large reptile soul', di.largeSoul.icon, 'reptile-soul'),
        softLeather: new PossibleDrop(di.softLeather.iconKey, 'soft reptile leather', di.softLeather.icon, 'reptile-leather'),
        mediumLeather: new PossibleDrop(di.mediumLeather.iconKey, 'medium reptile leather', di.mediumLeather.icon, 'reptile-leather'),
        toughLeather: new PossibleDrop(di.toughLeather.iconKey, 'tough reptile leather', di.toughLeather.icon, 'reptile-leather'),
    },
}

export default possibleDrops