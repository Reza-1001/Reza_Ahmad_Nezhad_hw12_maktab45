const http = require("http");
const fs = require("fs");
const cors = require("cors");

cors();
http
  .createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Request-Method", "*");
    response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    response.setHeader("Access-Control-Allow-Headers", "*");
    if (request.url === "/" && request.method === "GET") {
      response.setHeader("Content-Type", "text/html");
      fs.readFile("./public/index.html", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/js/login.js" && request.method === "GET") {
      fs.readFile("./public/js/login.js", "utf8", (err, page) => {
        response.setHeader("Content-Type", "text/javascript");
        response.write(page);
        response.end();
      });
    } else if (request.url === "/css/style.css" && request.method === "GET") {
      fs.readFile("./public/css/style.css", "utf8", (err, page) => {
        response.setHeader("Content-Type", "text/css");
        response.write(page);
        response.end();
      });
    } else if (request.url === "/Pics/space.jpg" && request.method === "GET") {
      fs.readFile("./public/Pics/space.jpg", (err, image) => {
        response.setHeader("Content-Type", "image/jpeg");
        response.write(image);
        response.end();
      });
    } else if (request.method === "POST") {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
        body = JSON.parse(body);
      });
      let found = false;
      request.on("end", () => {
        fs.readFile("./users.json", "utf8", function (err, data) {
          for (let i of JSON.parse(data)) {
            if (i.username === body.username && i.password === body.password) {
              found = true;
              break;
            } else found = false;
          }
          
          if (found) {
            response.writeHead(200, { "Content-Type": "text/plain" });

            response.write(JSON.stringify(1));
            response.end();
          } else {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(JSON.stringify(0));
            response.end();
          }
        });
      });
    } else {
      response.write("Bad Request");
      response.end();
    }
  })
  .listen(5005);

console.log("Server started on port 5005 ...");
