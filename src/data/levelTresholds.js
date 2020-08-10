
// xp = xp needed for next level (i.e. level 0 needs 500xp to get to level 1)
// Classic game xp is calculated this way - xp / fightsNeededToLevel
// Boss game gives you x % of xp if you win

// there is also a variable called gameFlow, which controls the whole game system -
// items, enemies. As you can see the value is below 1 until level 5. This is because
// player starts without items. Items are generated with minimal gameFlow value 1, meaning 
// this is the period for Player to get equipped.
// Values below 1 are for enemies, which are considered "Starting enemies".
// For items minimum gameFlow is 1 

let levelTresholds = [
    { level: 0, xp: 500, gameFlow: 0.2, fightsNeededToLevel: 3 },
    { level: 1, xp: 1000, gameFlow: 0.3, fightsNeededToLevel: 3 },
    { level: 2, xp: 1800, gameFlow: 0.425, fightsNeededToLevel: 3 },
    { level: 3, xp: 2800, gameFlow: 0.6, fightsNeededToLevel: 3 },
    { level: 4, xp: 4000, gameFlow: 0.8, fightsNeededToLevel: 3 },
    { level: 5, xp: 5500, gameFlow: 1, fightsNeededToLevel: 3 },
    { level: 6, xp: 6700, gameFlow: 1.2, fightsNeededToLevel: 4 },
    { level: 7, xp: 8500, gameFlow: 1.4, fightsNeededToLevel: 4 },
    { level: 8, xp: 12500, gameFlow: 1.6, fightsNeededToLevel: 4 },
    { level: 9, xp: 16000, gameFlow: 1.8, fightsNeededToLevel: 4 },
    { level: 10, xp: 20000, gameFlow: 2, fightsNeededToLevel: 4 },
    { level: 11, xp: 25000, gameFlow: 2.3, fightsNeededToLevel: 5 },
    { level: 12, xp: 32500, gameFlow: 2.6, fightsNeededToLevel: 5 },
    { level: 13, xp: 40000, gameFlow: 2.9, fightsNeededToLevel: 5 },
    { level: 14, xp: 50000, gameFlow: 3.2, fightsNeededToLevel: 5 },
    { level: 15, xp: 65500, gameFlow: 3.6, fightsNeededToLevel: 6 },
    { level: 16, xp: 72500, gameFlow: 4, fightsNeededToLevel: 6 },
    { level: 17, xp: 90000, gameFlow: 4.4, fightsNeededToLevel: 6 },
    { level: 18, xp: 110000, gameFlow: 4.9, fightsNeededToLevel: 7 },
    { level: 19, xp: 135000, gameFlow: 5.4, fightsNeededToLevel: 7 },
    { level: 20, xp: 1620000, gameFlow: 5.9, fightsNeededToLevel: 7 },
    { level: 21, xp: 190000, gameFlow: 6.5, fightsNeededToLevel: 8 },
    { level: 22, xp: 220000, gameFlow: 7.1, fightsNeededToLevel: 8 },
    { level: 23, xp: 255000, gameFlow: 7.7, fightsNeededToLevel: 8 },
    { level: 24, xp: 300000, gameFlow: 8.4, fightsNeededToLevel: 9 },
    { level: 25, xp: 350000, gameFlow: 9.1, fightsNeededToLevel: 9 },
    { level: 26, xp: 410000, gameFlow: 10, fightsNeededToLevel: 10 },
    { level: 27, xp: 480000, gameFlow: 11, fightsNeededToLevel: 10 },
    { level: 28, xp: 560000, gameFlow: 12, fightsNeededToLevel: 11 },
    { level: 29, xp: 650000, gameFlow: 13, fightsNeededToLevel: 12 },
    { level: 30, xp: 750000, gameFlow: 15, fightsNeededToLevel: 12 },
]


export default levelTresholds