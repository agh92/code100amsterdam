const fetchPuzzleData = () => fetch("https://devrel.wearedevelopers.com/code100-puzzles/017-stars/stars.json")
const elipsisArea = (width, height) => Math.PI * width/2 * height/2
const squareArea = (width, height) => width * height

const solvePuzzle = async () => {
    const puzzleData = await fetchPuzzleData()
    const images = await puzzleData.json()
    const greenPixels = images
        .map(image => squareArea(image.width, image.height) - elipsisArea(image.width, image.height))
        .reduce((a, b) => a + b)

    console.log(Math.floor(greenPixels))
}

solvePuzzle()