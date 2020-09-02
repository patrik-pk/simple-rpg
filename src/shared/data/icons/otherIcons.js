import { ReactComponent as Knight } from '../../../resources/icons/knight.svg'
import { ReactComponent as Attack } from '../../../resources/icons/attack.svg'
import { ReactComponent as Info } from '../../../resources/icons/info.svg'
import { ReactComponent as Close } from '../../../resources/icons/close.svg'
import { ReactComponent as Coin } from '../../../resources/icons/coin.svg'
import { ReactComponent as Dice } from '../../../resources/icons/dice.svg'
import { ReactComponent as Star } from '../../../resources/icons/star.svg'
// import { ReactComponent as Lock } from '../../../resources/icons/lock.svg'
import { ReactComponent as MeleeAction } from '../../../resources/icons/actions/action_melee.svg'
import { ReactComponent as RangedAction } from '../../../resources/icons/actions/action_ranged_light.svg'

const otherIcons = {
    knight: { name: 'Player Icon', icon: Knight, url: 'https://www.flaticon.com/free-icon/knight_2863130' },
    attack: { name: 'Attack Button', icon: Attack, url: 'https://www.flaticon.com/free-icon/sword_942612' },
    info: { name: 'Info Button', icon: Info, url: 'https://www.flaticon.com/free-icon/info_159645' },
    close: { name: 'Close Button', icon: Close, url: 'https://www.flaticon.com/free-icon/close_1828778' },
    coin: { name: 'Coin', icon: Coin, url: 'https://www.flaticon.com/free-icon/coins_483707' },
    dice: { name: 'Dice', icon: Dice, url: 'https://www.flaticon.com/free-icon/dice_520737' },
    star: { name: 'Star', icon: Star, url: 'https://www.flaticon.com/free-icon/star_786331' },
    // lock: { name: 'Lock', icon: Lock, url: 'https://www.flaticon.com/free-icon/lock-padlock-symbol-for-security-interface_45259' },
    meleeAction: { name: 'Melee Action', icon: MeleeAction, url: 'https://www.flaticon.com/free-icon/sword_1904608' },
    rangedAction: { name: 'Ranged Action', icon: RangedAction, url: 'https://www.flaticon.com/free-icon/right-chevron_21097' },
}

export default otherIcons
