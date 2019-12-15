
export default function randomGenerator(minimum, maximum, percentage) {
    return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum) * percentage
}
    