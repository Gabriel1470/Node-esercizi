
const { createServer } = require( "node:http");

function createApp(){  
    return  createServer((request, response) => {

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end("<html><body><h1>Solita scritta di test!</h1></body></html>")

    })
}

module.exports = createApp;