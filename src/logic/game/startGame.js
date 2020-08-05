import generateEnemy from "./generateEnemy"

export default function startGame(gameType, props, boss) {

    const generatedEnemy = (() => {
        if(gameType === "Classic") return generateEnemy(gameType, props.level.currentLevel)
        if(gameType === "Boss") { 
            let genEnemy = JSON.parse(JSON.stringify(boss)) // getting copy of the object to prevent bug that changes environmentSrc in possibleEnemies.js 
            genEnemy.currentEnemy.environmentSrc = require("../../resources/environment/dungeon.jpg")
            return genEnemy
        }
    })()

    return {
        player: { // reset player
            ...props.player,
            currentHp: props.player.maxHp,
            damageTaken: ""
        },
        enemy: generatedEnemy,
        environmentSrc: generatedEnemy.currentEnemy.environmentSrc, // set environment img based on generated enemy
        battleStatus: "inBattle",
        canAttack: true,
        currency: {
            gold: props.currency.gold,
            diamonds: props.currency.diamonds,
            acquiredGold: null,
            acquiredDiamonds: null
        },
    }
}