
export default function randomGenerator(minimum, maximum, percentage) {
    if(percentage === null || percentage === undefined) percentage = 1
    return (Math.ceil(Math.random() * (maximum - minimum + 1)) + minimum) * percentage
}
    