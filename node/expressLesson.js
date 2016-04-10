var http = require('http');
var fs = require('fs');


// this handles the actual request
function onRequest(request,response){
    console.log("User made a request " + request.url);
    // writeHead(statusCode,reason - as an object,obj) takes these 3 args
    response.writeHead(200,{"Context-Type": "text/plain"});
    // belowis what is sent to the browser as a response
    response.write("Here is your response data");
    // end the response
    response.end();
}

// takes a callback of what you want to execute once this call is made,
// you must tell it to listen on a port for the browser request
http.createServer(onRequest).listen(8888);
console.log("server is now running....");