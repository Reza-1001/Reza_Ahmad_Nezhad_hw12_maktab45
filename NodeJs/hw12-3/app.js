const http = require('http');

http.createServer(function(request, response) {
    if (request.url != "/" && request.method === "GET") {
        response.write(request.url);
        response.end();
    }
}).listen(5006);

console.log("Server started on port 5005 ...");
