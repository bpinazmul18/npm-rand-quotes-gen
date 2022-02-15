/*
*
* Title: Basic node app
* Description: npm random quotes generator is a simple node app.
* Author: Nazmul Haque
* Date: 15-02-2022
*
*/

// Dependency
const mathLibrary = require('./lib/math')
const quotesLibrary = require('./lib/quotes')

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
}
