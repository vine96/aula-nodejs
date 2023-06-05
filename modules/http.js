const http = require('http')

const port = 8080;
const server = http.createServer((req, res) => {
    if(req.url == "/home"){
        res.end("<h1>Home page</h1>")
    }
});