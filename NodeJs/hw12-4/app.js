const http = require('http');
http.createServer(function(request, response) {

    if (request.url === "/" && request.method === "GET") {
            response.write("Hello Web Application!");
            response.end();
    } else if (request.url === "/about" && request.method === "GET") {
        response.write("About Me!");
        response.end();
    
    } else if (request.url === "/archive" && request.method==="GET"){
        response.write("Archive");
        response.end();
    
} else if (request.url === "/contact" && request.method==="GET"){
    response.write("Contact Us");
    response.end();
} else if (request.url === "/links" && request.method==="GET"){
    response.write("Links Page");
    response.end();
}
else{
    response.write("invalid URL!!");
    response.end();
}

}).listen(5005);

console.log("Server started on port 5005 ...");
