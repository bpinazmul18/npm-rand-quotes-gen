/*
*
* Title: Basic node app
* Description: npm random quotes generator is a simple node app.
* Author: Nazmul Haque
* Date: 15-02-2022
*
*/

// Dependency
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
}

// Function that prints a random quote
app.printAQuote = function () {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get number of quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const genRandNumber = mathLibrary.getRandNum(1, numberOfQuotes);

    // Pick a quote
    const pickQuote = allQuotes[genRandNumber -1]

    // Print quote to the console
    console.log(pickQuote)
}

// Function that loops indefinitely, calling the printAQuote function as it goes
app.infiniteLoop = function infiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.infiniteLoop();
