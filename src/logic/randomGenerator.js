
// Function to generate random number between min and max,
// percentage is a optional parameter to multiple the values
// !!! both min and max values are INCLUDED
export default function randomGenerator(min, max, percentage = 1) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * percentage
}
    