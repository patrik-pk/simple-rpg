
// Generate random number between min and max 
// (both min and max are included) multiplied by percentage
export const randomGenerator = (min, max, percentage = 1) =>
    (Math.floor(Math.random() * (max - min + 1) + min)) * percentage

// Make first letter of every word uppercase
export const firstLetterUpperCase = strng => {

    // turn string into array split by white space
    let strngArray = strng.split(' ')

    // make every word from that array uppercase
    const upperCaseArray = strngArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    // turn that array back into string with whitespace
    const result = upperCaseArray.join(' ')

    // and return it
    return result
}

// Shuffle array
export const shuffleArray = arr => {

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

// Make a deep copy of an object
export const deepCopy = input => {

    let output, value, key

    if (typeof input !== "object" || input === null) return input

    // Create an array or object to hold the values
    output = Array.isArray(input) ? [] : {}

    for (key in input) {
        value = input[key]

        // Recursively (deep) copy for nested objects, including arrays
        output[key] = deepCopy(value)
    }

    return output
}
