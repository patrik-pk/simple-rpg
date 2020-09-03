import rarities from '../rarities'
import iconIndexes from './iconIndexes'

export default [

    // Low Level
    {
        levelOfItems: 5,
        rarities: [
            // Mythic
            {
                bonusValues: [20, 20, 20, 20, 20, 20],
                rarity: rarities.mythic,
                id: 'mythic-low',
                neededDrops: {
                    amount: 10,
                    drops: [
                        'small aquatic soul',
                        'small aqua meat',
                        'small avian soul',
                        'small feather',
                        'small dinosaur soul',
                        'small fossil',
                        'small insect soul',
                        'weak poison',
                        'small wildlife soul',
                        'soft wildlife leather',
                        'small reptile soul',
                        'soft reptile leather',
                    ]
                },
                iconIndexes: iconIndexes.mythic
            },
            // Aquatic
            {
                bonusValues: [75, 0, 0, 0, 0, 0],
                rarity: rarities.aquatic,
                id: 'aquatic-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small aquatic soul', 'small aqua meat']
                },
                iconIndexes: iconIndexes.aquatic
            },
            // Avian
            {
                bonusValues: [0, 75, 0, 0, 0, 0],
                rarity: rarities.avian,
                id: 'avian-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small avian soul', 'small feather']
                },
                iconIndexes: iconIndexes.avian
            },
            // Dinosaur
            {
                bonusValues: [0, 0, 75, 0, 0, 0],
                rarity: rarities.dinosaur,
                id: 'dinosaur-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small dinosaur soul', 'small fossil']
                },
                iconIndexes: iconIndexes.dinosaur
            },
            // Insect
            {
                bonusValues: [0, 0, 0, 75, 0, 0],
                rarity: rarities.insect,
                id: 'insect-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small insect soul', 'weak poison']
                },
                iconIndexes: iconIndexes.insect
            },
            // Wildlife
            {
                bonusValues: [0, 0, 0, 0, 0, 75],
                rarity: rarities.wildlife,
                id: 'wildlife-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small wildlife soul', 'soft wildlife leather']
                },
                iconIndexes: iconIndexes.wildlife
            },
            // Reptile
            {
                bonusValues: [0, 0, 0, 0, 75, 0],
                rarity: rarities.reptile,
                id: 'reptile-low',
                neededDrops: {
                    amount: 25,
                    drops: ['small reptile soul', 'soft reptile leather']
                },
                iconIndexes: iconIndexes.reptile
            },
        ]
    },

    // Medium Level
    {
        levelOfItems: 15,
        rarities: [
            // Mythic
            {
                bonusValues: [20, 20, 20, 20, 20, 20],
                rarity: rarities.mythic,
                id: 'mythic-medium',
                neededDrops: {
                    amount: 10,
                    drops: [
                        'medium aquatic soul',
                        'medium aqua meat',
                        'medium avian soul',
                        'medium feather',
                        'medium dinosaur soul',
                        'medium fossil',
                        'medium insect soul',
                        'medium poison',
                        'medium wildlife soul',
                        'medium wildlife leather',
                        'medium reptile soul',
                        'medium reptile leather',
                    ]
                },
                iconIndexes: iconIndexes.mythic
            },
            // Aquatic
            {
                bonusValues: [75, 0, 0, 0, 0, 0],
                rarity: rarities.aquatic,
                id: 'aquatic-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium aquatic soul', 'medium aqua meat']
                },
                iconIndexes: iconIndexes.aquatic
            },
            // Avian
            {
                bonusValues: [0, 75, 0, 0, 0, 0],
                rarity: rarities.avian,
                id: 'avian-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium avian soul', 'medium feather']
                },
                iconIndexes: iconIndexes.avian
            },
            // Dinosaur
            {
                bonusValues: [0, 0, 75, 0, 0, 0],
                rarity: rarities.dinosaur,
                id: 'dinosaur-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium dinosaur soul', 'medium fossil']
                },
                iconIndexes: iconIndexes.dinosaur
            },
            // Insect
            {
                bonusValues: [0, 0, 0, 75, 0, 0],
                rarity: rarities.insect,
                id: 'insect-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium insect soul', 'medium poison']
                },
                iconIndexes: iconIndexes.insect
            },
            // Wildlife
            {
                bonusValues: [0, 0, 0, 0, 0, 75],
                rarity: rarities.wildlife,
                id: 'wildlife-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium wildlife soul', 'medium wildlife leather']
                },
                iconIndexes: iconIndexes.wildlife
            },
            // Reptile
            {
                bonusValues: [0, 0, 0, 0, 75, 0],
                rarity: rarities.reptile,
                id: 'reptile-medium',
                neededDrops: {
                    amount: 25,
                    drops: ['medium reptile soul', 'medium reptile leather']
                },
                iconIndexes: iconIndexes.reptile
            },
        ]
    },

    // High Level
    {
        levelOfItems: 25,
        rarities: [
            // Mythic
            {
                bonusValues: [20, 20, 20, 20, 20, 20],
                rarity: rarities.mythic,
                id: 'mythic-high',
                neededDrops: {
                    amount: 10,
                    drops: [
                        'large aquatic soul',
                        'large aqua meat',
                        'large avian soul',
                        'large feather',
                        'large dinosaur soul',
                        'large fossil',
                        'large insect soul',
                        'strong poison',
                        'large wildlife soul',
                        'tough wildlife leather',
                        'large reptile soul',
                        'tough reptile leather',
                    ]
                },
                iconIndexes: iconIndexes.mythic
            },
            // Aquatic
            {
                bonusValues: [75, 0, 0, 0, 0, 0],
                rarity: rarities.aquatic,
                id: 'aquatic-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large aquatic soul', 'large aqua meat']
                },
                iconIndexes: iconIndexes.aquatic
            },
            // Avian
            {
                bonusValues: [0, 75, 0, 0, 0, 0],
                rarity: rarities.avian,
                id: 'avian-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large avian soul', 'large feather']
                },
                iconIndexes: iconIndexes.avian
            },
            // Dinosaur
            {
                bonusValues: [0, 0, 75, 0, 0, 0],
                rarity: rarities.dinosaur,
                id: 'dinosaur-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large dinosaur soul', 'large fossil']
                },
                iconIndexes: iconIndexes.dinosaur
            },
            // Insect
            {
                bonusValues: [0, 0, 0, 75, 0, 0],
                rarity: rarities.insect,
                id: 'insect-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large insect soul', 'strong poison']
                },
                iconIndexes: iconIndexes.insect
            },
            // Wildlife
            {
                bonusValues: [0, 0, 0, 0, 0, 75],
                rarity: rarities.wildlife,
                id: 'wildlife-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large wildlife soul', 'tough wildlife leather']
                },
                iconIndexes: iconIndexes.wildlife
            },
            // Reptile
            {
                bonusValues: [0, 0, 0, 0, 75, 0],
                rarity: rarities.reptile,
                id: 'reptile-high',
                neededDrops: {
                    amount: 25,
                    drops: ['large reptile soul', 'tough reptile leather']
                },
                iconIndexes: iconIndexes.reptile
            },
        ]
    },
]