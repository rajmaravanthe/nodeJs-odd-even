var http = require('http');

//variable declaration
var num = 4;
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });

    if (num % 2 == 0) {
        console.log("Number is even ");
        response.end("Number is even ");
    } else {
        console.log("Number is odd ");
        response.end("Number is odd ");
    }

});

server.listen(3000);