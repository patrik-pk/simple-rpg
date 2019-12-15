
import generateEnemy from "./generateEnemy"

export default function startGame(props) {

    const generatedEnemy = generateEnemy(props)

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