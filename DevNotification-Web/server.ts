import http = require('http');
import Index = require("../DevNotification/typings/globals/node/index");
var port = Index.process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);