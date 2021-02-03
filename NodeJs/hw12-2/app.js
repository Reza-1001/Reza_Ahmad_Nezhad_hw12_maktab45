const http=require('http');
const fs=require('fs');
http.createServer(function (req, res){
    if (req.url === "/myFile" && req.method === "GET") {
        fs.readFile('./myFile.json', 'utf8', (err, page) => {
            res.write(page);
            res.end();
        })
    }
}).listen(5005);

console.log("Server started on port 5005 ...");