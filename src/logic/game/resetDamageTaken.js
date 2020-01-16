
export default function resetDamageTaken(isMounted, props, obj) {

    // reset damageTaken to reset animation
    if(isMounted) {
        if(obj === "Player") return { player: {...props, damageTaken: ""} }
        if (obj === "Enemy") return { enemy: {...props, damageTaken: ""} }
    } 
}