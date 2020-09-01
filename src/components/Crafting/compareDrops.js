
// Check if player has needed drops to craft the item
export default (neededDrops, playerDrops) => {
    if (neededDrops.length === 0) return false
    
    // loop through needed drops (return array of booleans)
    const compared = neededDrops.map(neededDrop => {
        let playerHasTheDrops = false
    
        // nest loop through player drops, if the names match
        // and player has the amount, set found to true
        playerDrops.forEach(playerDrop => {
            if (playerDrop.name === neededDrop.name && playerDrop.amount >= neededDrop.amount) {
                playerHasTheDrops = true
            }
        })
    
        return playerHasTheDrops
    })
    
    // if compared includes false (player doesn't have atleast one needed drop), 
    // return false, if the compared array doesn't have any false, return true
    return !compared.includes(false)
}
