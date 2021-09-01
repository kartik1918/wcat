const cheerio = require('cheerio');
const request = require('request');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score', cb); //cb -> callback function

function cb(error, response, html) {
    if (error) {
    console.error('error:', error); // Print the error if one occurred
    }
    else extractHTML(html);
}

function extractHTML(html) {
    let selectorTool = cheerio.load(html);
    let name = selectorTool('.best-player-name>a').text();
    console.log(name);
}