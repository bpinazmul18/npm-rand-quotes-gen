/*
*
* Title: Math library
* Description: Utility library for math-related functions
* Author: Nazmul Haque
* Date: 15-02-2022
*
*/

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

math.getRandNum = function genRandNum(min, max) {
    let minimum = min;
    let maximum = max;

    minimum = typeof minimum === "number" ? minimum : 0;
    maximum = typeof maximum === "number" ? maximum : 0;

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

// Export this object
module.exports = math
