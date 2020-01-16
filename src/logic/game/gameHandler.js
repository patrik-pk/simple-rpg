
import getReward from "./getReward"
import generateItem from "../generateItem"

export default function gameHandler(props, type, status, newHp, damageTaken, didReceiveCrit) {

    // END GAME
    if(status === "End") {

        const enemyType = props.enemy.type

        // PLAYER WINS
        if (type === "Player") {

            let genItem = generateItem(props, "Game", props.invItems.length, enemyType)
            const reward = getReward(props, "Victory", enemyType)

            const setBosses = () => {
                if(enemyType === "Boss") {
                    const dungeon = props.enemy.dungeon
                    const addDungeonCount = match => {
                        if(dungeon === match) return 1
                        else return 0
                    }

                    return {
                        beasts: props.bosses.beasts + addDungeonCount("beast"),
                        dragons: props.bosses.dragons + addDungeonCount("dragon"),
                        insect: props.bosses.insect + addDungeonCount("insect"),
                        monsters: props.bosses.monsters + addDungeonCount("monster"),
                        reptiles: props.bosses.reptiles + addDungeonCount("reptile")
                    }
                } else {
                    return {
                        beasts: props.bosses.beasts,
                        dragons: props.bosses.dragons,
                        insect: props.bosses.insect,
                        monsters: props.bosses.monsters,
                        reptiles: props.bosses.reptiles
                    }
                }
            }

            return {
                level: reward.level,
                bosses: setBosses(),
                battleStatus: "Victory",
                gameEnded: true,
                canAttack: false,
                enemy: { ...props.enemy, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit },
                currency: reward.currency,
                generatedItem: genItem,
                invItems: [...props.invItems, genItem = { ...genItem, destination: "Inventory" }]
            }
        }
        // ENEMY WINS
        if(type === "Enemy") {

            const reward = getReward(props, "Defeat", enemyType)

            return {
                level: reward.level,
                battleStatus: "Defeat",
                gameEnded: true,
                canAttack: false,
                player: { ...props.player, currentHp: newHp, damageTaken: damageTaken, receivedCrit: didReceiveCrit },
                currency: reward.currency,
            }
        }
    }

    // CONTINUE GAME
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