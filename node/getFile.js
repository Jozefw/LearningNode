var http = require('http');
var fs = require('fs');

function respError(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("hey this page isnt there, wrong direction");
    response.end();
};

function onRequest(request,response){
    if ( request.method == 'GET' && request.url == '/' ){
        // sending back html not text so the content type is html
        response.writeHead(200, {"Content-Type": "text/html"});
        // we need a stream of data send this is handled by fs.createReadStrem(path,options)
        // and piped back to the response object
        fs.createReadStream("./index.html").pipe(response);
    } else {
        respError(response);
    }
};

http.createServer(onRequest).listen(8888);
console.log("Server is running on port 8888....");







