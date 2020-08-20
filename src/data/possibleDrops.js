import di from './icons/dropIcons'

class PossibleDrop {
    constructor(name, icon, classVal) {
        this.name = name
        this.icon = icon
        this.classVal = classVal
    }
}

const possibleDrops = {
    avians: {
        smallSoul: new PossibleDrop('small avian soul', di.SmallSoul, 'avian-soul'),
        mediumSoul: new PossibleDrop('medium avian soul', di.MediumSoul, 'avian-soul'),
        largeSoul: new PossibleDrop('large avian soul', di.LargeSoul, 'avian-soul'),
        smallFeather: new PossibleDrop('small feather', di.SmallFeather, 'feather'),
        mediumFeather: new PossibleDrop('medium feather', di.MediumFeather, 'feather'),
        largeFeather: new PossibleDrop('large feather', di.LargeFeather, 'feather'),
    },
    dinosaurs: {
        smallSoul: new PossibleDrop('small dinosaur soul', di.SmallSoul, 'dinosaur-soul'),
        mediumSoul: new PossibleDrop('medium dinosaur soul', di.MediumSoul, 'dinosaur-soul'),
        largeSoul: new PossibleDrop('large dinosaur soul', di.LargeSoul, 'dinosaur-soul'),
        smallFossil: new PossibleDrop('small fossil', di.SmallFossil, 'fossil'),
        mediumFossil: new PossibleDrop('medium fossil', di.MediumFossil, 'fossil'),
        largeFossil: new PossibleDrop('large fossil', di.LargeFossil, 'fossil'),
    },
    insect: {
        smallSoul: new PossibleDrop('small insect soul', di.SmallSoul, 'insect-soul'),
        mediumSoul: new PossibleDrop('medium insect soul', di.MediumSoul, 'insect-soul'),
        largeSoul: new PossibleDrop('large insect soul', di.LargeSoul, 'insect-soul'),
        weakPoison: new PossibleDrop('weak poison', di.WeakPoison, 'poison'),
        mediumPoison: new PossibleDrop('medium poison', di.MediumPoison, 'poison'),
        strongPoison: new PossibleDrop('strong poison', di.StrongPoison, 'poison'),
    },
    wildlife: {
        smallSoul: new PossibleDrop('small wildlife soul', di.SmallSoul, 'wildlife-soul'),
        mediumSoul: new PossibleDrop('medium wildlife soul', di.MediumSoul, 'wildlife-soul'),
        largeSoul: new PossibleDrop('large wildlife soul', di.LargeSoul, 'wildlife-soul'),
        softLeather: new PossibleDrop('soft wildlife leather', di.SoftLeather, 'wildlife-leather'),
        mediumLeather: new PossibleDrop('medium wildlife leather', di.MediumLeather, 'wildlife-leather'),
        toughLeather: new PossibleDrop('tough wildlife leather', di.ToughLeather, 'wildlife-leather'),
    },
    reptiles: {
        smallSoul: new PossibleDrop('small reptile soul', di.SmallSoul, 'reptile-soul'),
        mediumSoul: new PossibleDrop('medium reptile soul', di.MediumSoul, 'reptile-soul'),
        largeSoul: new PossibleDrop('large reptile soul', di.LargeSoul, 'reptile-soul'),
        softLeather: new PossibleDrop('soft reptile leather', di.SoftLeather, 'reptile-leather'),
        mediumLeather: new PossibleDrop('medium reptile leather', di.MediumLeather, 'reptile-leather'),
        toughLeather: new PossibleDrop('tough reptile leather', di.ToughLeather, 'reptile-leather'),
    },
    aquatic: {
        smallSoul: new PossibleDrop('small aquatic soul', di.SmallSoul, 'aquatic-soul'),
        mediumSoul: new PossibleDrop('medium aquatic soul', di.MediumSoul, 'aquatic-soul'),
        largeSoul: new PossibleDrop('large aquatic soul', di.LargeSoul, 'aquatic-soul'),
        smallMeat: new PossibleDrop('small aqua meat', di.SmallMeat, 'aqua-meat'),
        mediumMeat: new PossibleDrop('medium aqua meat', di.MediumMeat, 'aqua-meat'),
        largeMeat: new PossibleDrop('large aqua meat', di.LargeMeat, 'aqua-meat'),
    }
}

export default possibleDrops