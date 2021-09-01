const cheerio = require('cheerio');
const request = require('request');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', cb); //cb -> callback function

function cb(error, response, html) {
    if (error) {
    console.error('error:', error); // Print the error if one occurred
    }
    else extractHTML(html);
}

function extractHTML(html) {
    let selectorTool = cheerio.load(html);
    let commentary = selectorTool('.match-comment-wrapper .match-comment-long-text');
    let lastBallCom = selectorTool(commentary[0]).text();
    console.log(lastBallCom);
}