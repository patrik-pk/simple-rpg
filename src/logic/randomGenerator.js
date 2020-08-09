
export default function randomGenerator(min, max, percentage = 1) {
    return (Math.ceil(Math.random() * (max - min + 1)) + min) * percentage
}
    