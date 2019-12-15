
import generateItem from "../generateItem"

export default function reroll(props) {
    if (props.currency.diamonds >= 1) {

        let newShopItems = []

        for (let i = 0; i < 3; i++) {
            newShopItems.push(generateItem(props, "Shop", i))
        }

        return {
            shopItems: newShopItems,
            currency: {
                gold: props.currency.gold,
                diamonds: props.currency.diamonds - 1,
                acquiredGold: null,
                acquiredDiamonds: null
            }
        }
    }
}