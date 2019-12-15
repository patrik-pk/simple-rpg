
import mainData from "../../data/_mainData"

export default function getReward(props, status) {

    const acquiredMultiplier = (status) => {
        if (status === "Victory") return mainData.rewardBase.status.winMult
        if (status === "Defeat") return mainData.rewardBase.status.loseMult
    }

    const difficultyMultiplier = () => {
        switch(props.enemy.difficulty) {
            case 1: return mainData.rewardBase.difficulty.easy; 
            case 2: return mainData.rewardBase.difficulty.medium;
            case 3: return mainData.rewardBase.difficulty.hard;
            default: break;
        }
    }

    // Global
    const statusMult = acquiredMultiplier(status)
    const difficultyMult = difficultyMultiplier()

    // Gold
    const baseGold = mainData.rewardBase.gold
    const gameFlow = props.gameFlow
    const randomGoldMult = mainData.rewardBase.goldMult

    // Diamonds
    const baseDiamonds = mainData.rewardBase.diamonds
    const randomDiamondsMult = mainData.rewardBase.diamondsMult

    // Calculations
    const acquiredGold = Math.round(baseGold * gameFlow * randomGoldMult * statusMult * difficultyMult)
    const acquiredDiamonds = Math.round(baseDiamonds * randomDiamondsMult * statusMult * difficultyMult)
    const gold = props.currency.gold + acquiredGold
    const diamonds = props.currency.diamonds + acquiredDiamonds

    return {
        acquiredGold,
        acquiredDiamonds,
        gold,
        diamonds
    }
}