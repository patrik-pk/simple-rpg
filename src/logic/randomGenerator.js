
// Function to generate random number between min and max,
// percentage is a optional parameter to multiple the values
export default function randomGenerator(min, max, percentage = 1) {
    return (Math.ceil(Math.random() * (max - min + 1)) + min) * percentage
}
    