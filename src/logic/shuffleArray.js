
export default function shuffleArray(arr) {
    
    // Set count to array length
    let counter = arr.length

    // Loop through array
    while (counter > 0) {

        // Get random index from counter
        const index = Math.floor(Math.random() * counter)

        // Decrease counter by 1
        counter--
        
        // Swap the the values
        const temp = arr[counter]
        arr[counter] = arr[index]
        arr[index] = temp
    }

    return arr
}
