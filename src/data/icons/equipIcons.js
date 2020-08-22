
import { ReactComponent as Helmet } from '../../resources/icons/helmet.svg'
import { ReactComponent as Chestplate } from '../../resources/icons/chestplate.svg'
import { ReactComponent as Pants } from '../../resources/icons/pants.svg'
import { ReactComponent as Gloves } from '../../resources/icons/gloves.svg'
import { ReactComponent as Boots } from '../../resources/icons/boots.svg'
import { ReactComponent as Necklace } from '../../resources/icons/necklace.svg'
import { ReactComponent as Earrings } from '../../resources/icons/earrings.svg'
import { ReactComponent as Ring } from '../../resources/icons/ring.svg'
import { ReactComponent as Belt } from '../../resources/icons/belt.svg'
import { ReactComponent as Sword } from '../../resources/icons/sword.svg'
import { ReactComponent as Bow } from '../../resources/icons/bow.svg'
import { ReactComponent as Shield } from '../../resources/icons/shield.svg'

// Type 1
import { ReactComponent as HelmetType1 } from '../../resources/icons/equipment/type1/helmet.svg'
import { ReactComponent as ChestplateType1 } from '../../resources/icons/equipment/type1/chestplate.svg'
import { ReactComponent as PantsType1 } from '../../resources/icons/equipment/type1/pants.svg'
import { ReactComponent as GlovesType1 } from '../../resources/icons/equipment/type1/gloves.svg'
import { ReactComponent as BootsType1 } from '../../resources/icons/equipment/type1/boots.svg'
import { ReactComponent as SwordType1 } from '../../resources/icons/equipment/type1/sword.svg'
import { ReactComponent as NecklaceType1 } from '../../resources/icons/equipment/type1/necklace.svg'
import { ReactComponent as EarringsType1 } from '../../resources/icons/equipment/type1/earrings.svg'
import { ReactComponent as RingType1 } from '../../resources/icons/equipment/type1/ring.svg'
import { ReactComponent as BeltType1 } from '../../resources/icons/equipment/type1/belt.svg'
import { ReactComponent as BowType1 } from '../../resources/icons/equipment/type1/bow.svg'
import { ReactComponent as ShieldType1 } from '../../resources/icons/equipment/type1/shield.svg'

// Type 2
import { ReactComponent as HelmetType2 } from '../../resources/icons/equipment/type2/helmet.svg'
import { ReactComponent as ChestplateType2 } from '../../resources/icons/equipment/type2/chestplate.svg'
import { ReactComponent as PantsType2 } from '../../resources/icons/equipment/type2/pants.svg'
import { ReactComponent as GlovesType2 } from '../../resources/icons/equipment/type2/gloves.svg'
import { ReactComponent as BootsType2 } from '../../resources/icons/equipment/type2/boots.svg'
import { ReactComponent as SwordType2 } from '../../resources/icons/equipment/type2/sword.svg'
import { ReactComponent as NecklaceType2 } from '../../resources/icons/equipment/type2/necklace.svg'
import { ReactComponent as EarringsType2 } from '../../resources/icons/equipment/type2/earrings.svg'
import { ReactComponent as RingType2 } from '../../resources/icons/equipment/type2/ring.svg'
import { ReactComponent as BeltType2 } from '../../resources/icons/equipment/type2/belt.svg'
import { ReactComponent as ShurikenType2 } from '../../resources/icons/equipment/type2/shuriken.svg'
import { ReactComponent as ShieldType2 } from '../../resources/icons/equipment/type2/shield.svg'

// Aquatic
import { ReactComponent as AquaticFins } from '../../resources/icons/equipment/special/aquatic_fins.svg'
import { ReactComponent as AquaticHarpoon } from '../../resources/icons/equipment/special/aquatic_harpoon.svg'
import { ReactComponent as AquaticNecklace } from '../../resources/icons/equipment/special/aquatic_necklace.svg'
import { ReactComponent as AquaticRing } from '../../resources/icons/equipment/special/aquatic_ring.svg'
import { ReactComponent as AquaticTrident } from '../../resources/icons/equipment/special/aquatic_trident.svg'

// Avian
import { ReactComponent as AvianChestplate } from '../../resources/icons/equipment/special/avian_chestplate.svg'
import { ReactComponent as AvianBoots } from '../../resources/icons/equipment/special/avian_boots.svg'
import { ReactComponent as AvianEarrings } from '../../resources/icons/equipment/special/avian_earrings.svg'
import { ReactComponent as AvianHelmet } from '../../resources/icons/equipment/special/avian_helmet.svg'
import { ReactComponent as AvianNecklace } from '../../resources/icons/equipment/special/avian_necklace.svg'
import { ReactComponent as AvianSpear } from '../../resources/icons/equipment/special/avian_spear.svg'

// Dinosaur
import { ReactComponent as DinosaurChestplate } from '../../resources/icons/equipment/special/dinosaur_chestplate.svg'
import { ReactComponent as DinosaurAxe } from '../../resources/icons/equipment/special/dinosaur_axe.svg'
import { ReactComponent as DinosaurBoots } from '../../resources/icons/equipment/special/dinosaur_boots.svg'
import { ReactComponent as DinosaurCrossbow } from '../../resources/icons/equipment/special/dinosaur_crossbow.svg'
import { ReactComponent as DinosaurShield } from '../../resources/icons/equipment/special/dinosaur_shield.svg'

// Insect
import { ReactComponent as InsectChestplate } from '../../resources/icons/equipment/special/insect_chestplate.svg'
import { ReactComponent as InsectHelmet } from '../../resources/icons/equipment/special/insect_helmet.svg'
import { ReactComponent as InsectMace } from '../../resources/icons/equipment/special/insect_mace.svg'
import { ReactComponent as InsectNecklace } from '../../resources/icons/equipment/special/insect_necklace.svg'
import { ReactComponent as InsectPants } from '../../resources/icons/equipment/special/insect_pants.svg'

// Reptile
import { ReactComponent as ReptileChestplate } from '../../resources/icons/equipment/special/reptile_chestplate.svg'
import { ReactComponent as ReptileBoots } from '../../resources/icons/equipment/special/reptile_boots.svg'
import { ReactComponent as ReptileNecklace } from '../../resources/icons/equipment/special/reptile_necklace.svg'
import { ReactComponent as ReptileSword } from '../../resources/icons/equipment/special/reptile_sword.svg'

// Wildlife
import { ReactComponent as WildlifeHelmet } from '../../resources/icons/equipment/special/wildlife_helmet.svg'
import { ReactComponent as WildlifeNecklace } from '../../resources/icons/equipment/special/wildlife_necklace.svg'
import { ReactComponent as WildlifeShield } from '../../resources/icons/equipment/special/wildlife_shield.svg'
import { ReactComponent as WildlifeTomahawk } from '../../resources/icons/equipment/special/wildlife_tomahawk.svg'


const equipIcons = {
    Helmet,
    Chestplate,
    Pants,
    Gloves,
    Boots,
    Necklace,
    Earrings,
    Ring,
    Belt,
    Sword,
    Bow,
    Shield,

    // Type 1
    type1: {
        helmet: { displayedName: 'Helmet', icon: HelmetType1 },
        chestplate: { displayedName: 'Chestplate', icon: ChestplateType1 },
        pants: { displayedName: 'Pants', icon: PantsType1 },
        gloves: { displayedName: 'Gloves', icon: GlovesType1 },
        boots: { displayedName: 'Boots', icon: BootsType1 },
        necklace: { displayedName: 'Necklace', icon: NecklaceType1 },
        earrings: { displayedName: 'Earrings', icon: EarringsType1 },
        ring: { displayedName: 'Ring', icon: RingType1 },
        belt: { displayedName: 'Belt', icon: BeltType1 },
        sword: { displayedName: 'Sword', icon: SwordType1 },
        bow: { displayedName: 'Bow', icon: BowType1 },
        shield: { displayedName: 'Shield', icon: ShieldType1 },
    },

    // Type 2
    type2: {
        helmet: { displayedName: 'Helmet', icon: HelmetType2 },
        chestplate: { displayedName: 'Chestplate', icon: ChestplateType2 },
        pants: { displayedName: 'Pants', icon: PantsType2 },
        gloves: { displayedName: 'Gloves', icon: GlovesType2 },
        boots: { displayedName: 'Boots', icon: BootsType2 },
        necklace: { displayedName: 'Necklace', icon: NecklaceType2 },
        earrings: { displayedName: 'Earrings', icon: EarringsType2 },
        ring: { displayedName: 'Ring', icon: RingType2 },
        belt: { displayedName: 'Belt', icon: BeltType2 },
        sword: { displayedName: 'Sword', icon: SwordType2 },
        bow: { displayedName: 'Shuriken', icon: ShurikenType2 },
        shield: { displayedName: 'Shield', icon: ShieldType2 },
    },

    // Aquatic
    aquatic: {
        fins: { displayedName: 'Fins', icon: AquaticFins },
        harpoon: { displayedName: 'Harpoon', icon: AquaticHarpoon },
        necklace: { displayedName: 'Necklace', icon: AquaticNecklace },
        ring: { displayedName: 'Ring', icon: AquaticRing },
        trident: { displayedName: 'Trident', icon: AquaticTrident },
    },

    // Avian
    avian: {
        chestplate: { displayedName: 'Chestplate', icon: AvianChestplate },
        boots: { displayedName: 'Boots', icon: AvianBoots },
        earrings: { displayedName: 'Earrings', icon: AvianEarrings },
        helmet: { displayedName: 'Helmet', icon: AvianHelmet },
        necklace: { displayedName: 'Necklace', icon: AvianNecklace },
        spear: { displayedName: 'Spear', icon: AvianSpear },
    },

    // Dinosaur
    dinosaur: {
        chestplate: { displayedName: 'Chestplate', icon: DinosaurChestplate },
        axe: { displayedName: 'Axe', icon: DinosaurAxe },
        boots: { displayedName: 'Boots', icon: DinosaurBoots },
        crossbow: { displayedName: 'Crossbow', icon: DinosaurCrossbow },
        shield: { displayedName: 'Shield', icon: DinosaurShield },
    },

    // Insect
    insect: {
        chestplate: { displayedName: 'Chestplate', icon: InsectChestplate },
        helmet: { displayedName: 'Helmet', icon: InsectHelmet },
        mace: { displayedName: 'Mace', icon: InsectMace },
        necklace: { displayedName: 'Necklace', icon: InsectNecklace },
        pants: { displayedName: 'Pants', icon: InsectPants },  
    },

    // Reptile
    reptile: {
        chestplate: { displayedName: 'Chestplate', icon: ReptileChestplate },
        boots: { displayedName: 'Boots', icon: ReptileBoots },
        necklace: { displayedName: 'Necklace', icon: ReptileNecklace },
        sword: { displayedName: 'Sword', icon: ReptileSword },
    },

    // Wildlife
    wildlife: {
        helmet: { displayedName: 'Helmet', icon: WildlifeHelmet },
        necklace: { displayedName: 'Necklace', icon: WildlifeNecklace },
        shield: { displayedName: 'Shield', icon: WildlifeShield },
        tomahawk: { displayedName: 'Tomahawk', icon: WildlifeTomahawk },
    }
}

export default equipIcons