//array with lab scores
//let scores = [60, 50, 58, 54, 54, 58, 50, 54, 58, 62, 34, 44, 69, 32, 46, 21, 20, 54, 77, 54, 25, 33, 51, 72, 88, 99, 10, 21, 20];
let scores = [2, 4, 6];

//function to get and return and print highest score
function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;

    for (let i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

//invoke function and pass in the scores
let highScore = printAndGetHighScore(scores);

console.log("Bubbles tests:" + scores.length);
console.log("Highest bubble score: " + highScore);

//function to get best results
function getBestResults(scores, highScore) {
    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
        bestSolutions.push(i);
        }
    }
    return bestSolutions;

}

//invoking function
let bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

