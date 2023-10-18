const http = require("http");
//const _ = require("underscore");

http.createServer(function(request, response) {
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
    response.write("</body>\n</html>");
    response.end();
}).listen(3000);