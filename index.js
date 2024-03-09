const fetchPuzzleData = () => fetch("https://devrel.wearedevelopers.com/code100-puzzles/017-stars/stars.json")
const sum = (a, b) => a + b;
const elipsisArea = (majorLength, minorLength) => Math.PI * majorLength/2 * minorLength/2
const rectangleArea = (width, height) => width * height
const calculateGreenPixels = image => rectangleArea(image.width, image.height) - elipsisArea(image.width, image.height);

const sumAllGreenPixels = images => {
    const sumOfgreenPixels = images
        .map(calculateGreenPixels)
        .reduce(sum)

    return Math.floor(sumOfgreenPixels)
};

const solvePuzzle = async () => {
    const puzzleData = await fetchPuzzleData()
    const images = await puzzleData.json()
    return sumAllGreenPixels(images)
}

solvePuzzle().then(console.log)