const http = require("http");
//const _ = require("underscore");

function update (response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>\n<html>\n");
    response.write("<title>Dice Roll</title>\n");
    response.write("<body>\n");

    for (let i = 0; i < 5; i++) {
        // Use underscore to get a random number between 1 and 6
        //let randNum = _.random(1, 6);
        randNum = Math.floor (Math.random () * 6 + 1);

        response.write("<p>" + randNum + "</p>\n");
    }

    response.write("</body></html>");
    response.end();
}
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>\n<html>\n");
    response.write("<title>Powerball Numbers</title>\n");
    response.write("<style> table, th, td {border: 1px solid black;}</style>");
    response.write("<body>");
    response.write("<center>");
    response.write("<h2>Powerball Numbers");
    response.write("<table><tr>");

    count = 0;
    powerballs = new Map ();
    while (count < 5) {
        randomNum = Math.floor (Math.random () * 69) + 1;
        if (!powerballs.has (randomNum)) {
            powerballs.set (randomNum, true);
            count++;
            response.write("<td>" + randomNum + "</td>");
            console.log(randomNum);
        }
    }
    randomNum = Math.floor (Math.random () * 26) + 1;
    console.log(randomNum);

    response.write("<td>" + randomNum + "</td>");

    response.write("</tr></table>");
    response.write("</center>");
    response.write("</body></html>");
    response.end();

}).listen(3000);