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
    let bowlersCardArr = selectorTool('.card.content-block.match-scorecard-table .Collapsible__contentOuter .table.bowler');

    // console.log(bowlersCardArr.length);
    let highestWicketPlayer = "";
    let numberOfWickets = 0;
    for (let i = 0; i < bowlersCardArr.length; i++) {
        let bowlerTable = selectorTool(bowlersCardArr[i]).html();
        let allBowlers = selectorTool(bowlerTable).find('tbody>tr');
        // console.log(bowlerTable);

        for (let j = 0; j < allBowlers.length; j++) {
            let colOfEachPlayerArr = selectorTool(allBowlers[j]).find('td');
            // console.log(colOfEachPlayer.length);
            let playerName = selectorTool(colOfEachPlayerArr[0]).text();
            let currnumOfWickets = selectorTool(colOfEachPlayerArr[4]).text();
            if (colOfEachPlayerArr.length == 1) continue;

            if (currnumOfWickets > numberOfWickets) {
                numberOfWickets = currnumOfWickets;
                highestWicketPlayer = playerName;
            }
        }
    }

    console.log("Highesh wicket taker is : " + highestWicketPlayer);
    console.log("Number of wickets " + numberOfWickets);

}