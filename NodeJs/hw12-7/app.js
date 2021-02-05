const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            response.write(page);
            response.end();
        });
    } 
    else if (request.url === "/js/login.js" && request.method === "GET") {
        fs.readFile('./public/js/login.js', 'utf8', (err, page) => {
            response.setHeader('Content-Type', 'text/javascript');
            response.write(page);
            response.end();
            
        });
    } else if (request.url === "/css/style.css" && request.method === "GET") {
        fs.readFile('./public/css/style.css', 'utf8', (err, page) => {
            response.setHeader('Content-Type', "text/css");
            response.write(page);
            response.end();
        });
    } else if (request.url === "/Pics/space.jpg" && request.method === "GET") {
        fs.readFile('./public/Pics/space.jpg', (err, image) => {
            response.setHeader('Content-Type','image/jpeg');
            response.write(image);
            response.end();
            
        });
    }else if (request.url === "/validate" && request.method === "POST") {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        request.on('data', function (chunk) {
        console.log('GOT DATA!');
    });
    response.end('callback(\'{\"msg\": \"OK\"}\')');
    } else {
        response.write("Bad Request");
        response.end();
    }
}).listen(5005);

console.log("Server started on port 5005 ...");
