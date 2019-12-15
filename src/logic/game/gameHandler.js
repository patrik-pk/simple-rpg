
import getReward from "./getReward"

export default function gameHandler(props, type, status, newHp, damageTaken, genItem, didReceiveCrit) {

    if(status === "End") {
        if (type === "Player") {

            // First 3 defeated enemies are tutorial enemies then gameFlow applies
            const newGameFlow = (props.gameFlow * 1.1).toFixed(2)
            const gameFlow = props.tutorial.enemyCount >= 3 ? newGameFlow : props.gameFlow

            return {
                gameFlow: gameFlow,
                battleStatus: "Victory",
                tutorial: { 
                    enemyCount: props.tutorial.enemyCount + 1, 
                    multiplier: props.tutorial.multiplier 
                },
                gameEnded: true,
                canAttack: false,
                enemy: { ...props.enemy, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit },
                currency: getReward(props, "Victory"),
                generatedItem: genItem,
                invItems: [...props.invItems, genItem = { ...genItem, destination: "Inventory" }]
            }
        }
        if(type === "Enemy") {
            return {
                battleStatus: "Defeat",
                gameEnded: true,
                canAttack: false,
                player: { ...props.player, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit },
                currency: getReward(props, "Defeat"),
            }
        }
    }

    if(status === "Continue") {
        if(type === "Player") {
            return {
                enemy: { ...props.enemy, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit },
                canAttack: false
            }
        }
        if(type === "Enemy") {
            return {
                player: { ...props.player, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit }
            }
        }
    }
}