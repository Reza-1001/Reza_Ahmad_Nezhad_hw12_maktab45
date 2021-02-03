const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){
    if (req.url==="/" && req.method==="GET"){
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("./public/index.html","utf8",(err,page)=>{
            if (err) return err.message;
            res.write(page);
            res.end();
        })
    }
}).listen(5005);
console.log("Server started on port 5005 ...");