import generateEnemy from '../logic/generateEnemy'

const boss = (level, bossIndex, strongStatIndex, specie) => {
    return generateEnemy('Boss', level, bossIndex, strongStatIndex, specie)
}

const bosses = [
    // Beasts
    [   
        boss(7, 0, 1, 'beast'),
        boss(12, 2, 1, 'beast'),
        boss(18, 0, 1, 'beast'),
        boss(22, 2, 1, 'beast'),
        boss(30, 1, 0, 'beast'),
    ],
    // Dragons
    [
        boss(20, 3, 0, 'dragon'),
        boss(24, 5, 0, 'dragon'),
        boss(26, 3, 0, 'dragon'),
        boss(32, 5, 0, 'dragon'),
        boss(35, 4, 0, 'dragon'),

    ],
    // Insect
    [
        boss(6, 6, 0, 'insect'),
        boss(11, 8, 0, 'insect'),
        boss(14, 6, 0, 'insect'),
        boss(21, 8, 0, 'insect'),
        boss(28, 7, 1, 'insect'),

    ],
    // Monsters
    [
        boss(10, 10, 1, 'monster'),
        boss(16, 9, 1, 'monster'),
        boss(23, 10, 1, 'monster'),
        boss(25, 9, 1, 'monster'),
        boss(29, 11, 1, 'monster'),
    ],
    // Reptiles
    [
        boss(5, 12, 1, 'reptile'),
        boss(8, 13, 0, 'reptile'),
        boss(13, 12, 1, 'reptile'),
        boss(17, 13, 0, 'reptile'),
        boss(27, 14, 1, 'reptile'),
    ],
]


export default bosses
