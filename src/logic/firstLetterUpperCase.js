
export default function firstLetterUpperCase(strng) {

    // fucntion that makes the first letter of every word upper case

    // turn string into array split by white space
    let strngArray = strng.split(' ')

    // make every word from that array uppercase
    const upperCaseArray = strngArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    // turn that array back into string with whitespace
    const result = upperCaseArray.join(' ')

    // and return it
    return result
}