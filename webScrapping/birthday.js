const cheerio = require('cheerio');
const request = require('request');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', cb); //cb -> callback function

function cb(error, response, html) {
    if (error) {
    console.error('error:', error); // Print the error if one occurred
    }
    else extractHTML(html);
}

function extractHTML(html) {
    let selectorTool = cheerio.load(html);
    let allTables = selectorTool('.table tbody');

    for (let i = 0; i < 4; i++) {
        let allRowOfEachTable = selectorTool(allTables[i]).find('tr');

        for (j = 0; j < allRowOfEachTable.length; j++) {
        let link = selectorTool(allRowOfEachTable[j]).find('a').attr('href');
        // console.log(link);

            if (link) {
                let fullLink = "https://www.espncricinfo.com/"+ link;
                getBirthday(fullLink);
            }

        }
    }
}

function getBirthday(link) {
    request(link, cb);
    function cb(error, response, html) {
        if (error) {
            console.log("error : ", error);
        } else {
            extractBirthdays(html);
        }
    }
}

function extractBirthdays(html) {
    let selectorTool = cheerio.load(html);
    let playerDetailsArr = selectorTool('.player-card-description.gray-900');
    // console.log(playerDetailsArr.length);
    let playerName = selectorTool(playerDetailsArr[0]).text();
    let birthDateArr = selectorTool(playerDetailsArr[1]).text().split(",");
    // console.log(birthDateArr);
    let birthDate = "";
    for (k = 0; k < 2; k++) {
        birthDate += birthDateArr[k];
    }
    
    console.log("Name of Player : " + playerName);
    console.log("Date of birth : " + birthDate);
    console.log();
}