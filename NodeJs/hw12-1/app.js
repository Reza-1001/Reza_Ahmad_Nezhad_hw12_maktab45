const http = require("http");
let res = `<p style="postion:absolute;font-size:50px;font-align:center;">
Hello World
</p>`;
http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      response.setHeader("Content-Type", "text/html");
      response.write(res);
    }
  })
  .listen(5005);
console.log("Server started on port 5005 ...");
