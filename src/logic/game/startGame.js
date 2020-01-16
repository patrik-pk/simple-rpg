
import generateEnemy from "./generateEnemy"


export default function startGame(gameType, props, boss) {

    const generatedEnemyFc = () => {
        if(gameType === "Classic") return generateEnemy(gameType, props.level.currentLevel)
        if(gameType === "Boss") { 
            let genEnemy = boss // already generated enemy
            genEnemy.currentEnemy.environmentSrc = require("../../resources/environment/dungeon.jpg")
            return genEnemy
        }
    }
    const generatedEnemy = generatedEnemyFc()

    return {
        player: { // reset player
            ...props.player,
            currentHp: props.player.maxHp,
            damageTaken: ""
        },
        enemy: generatedEnemy,
        environmentSrc: generatedEnemy.currentEnemy.environmentSrc, // set environment img based on generated enemy
        gameText: "", // reset end game text
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