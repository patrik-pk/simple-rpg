import mythic from './mythic'
import aquatic from './aquatic'
import avian from './avian'
import dinosaur from './dinosaur'
import insect from './insect'
import wildlife from './wildlife'
import reptile from './reptile'

// Exported Craftable Items - I will clean this up soon don't worry
const craftableItems = [

    // Low
    [
        mythic.low,
        aquatic.low,
        avian.low,
        dinosaur.low,
        insect.low,
        wildlife.low,
        reptile.low
    ],

    // Medium
    [
        mythic.medium,
        aquatic.medium,
        avian.medium,
        dinosaur.medium,
        insect.medium,
        wildlife.medium,
        reptile.medium
    ],

    // High
    [
        mythic.high,
        aquatic.high,
        avian.high,
        dinosaur.high,
        insect.high,
        wildlife.high,
        reptile.high
    ]
]

export default craftableItems