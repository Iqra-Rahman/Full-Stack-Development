
let http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
    console.log('This example is different!');
    console.log('The result is displayed in the Command Line Interface');
}).listen(8080);


// var http = require('http');

// http.createServer(requestListener)

// listener = function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/html'});

//    // Send the response body as "Hello World"
//    response.end('<h2 style="text-align: center;">Hello World</h2>');
// };

// http = require('node:http');
// listener = function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/html
//    response.writeHead(200, {'Content-Type': 'text/html'});

//    // Send the response body as "Hello World"
//    response.end('<h2 style="text-align: center;">Hello World</h2>');
// };

// server = http.createServer(listener);
// server.listen(3000);

// // Console will print the message

// console.log('Server running at http://127.0.0.1:3000/');
