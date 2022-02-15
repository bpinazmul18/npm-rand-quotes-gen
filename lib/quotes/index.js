/*
*
* Title: Math library
* Description: Utility library for math-related functions
* Author: Nazmul Haque
* Date: 15-02-2022
*
*/

// Dependencies
const fs = require("fs");

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function () {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf8");

    // Turn the string into an array
    const quotesArr = fileContents.split(/\r?\n/);

    // Return the array
    return quotesArr;
}

module.exports = quotes;
