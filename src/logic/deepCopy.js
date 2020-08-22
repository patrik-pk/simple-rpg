
// Function to make a deep copy of an object
export default function deepCopy(input) {

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