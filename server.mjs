import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    const jsResponse = JSON.stringify({location:"Mars"})
    response.end("<html><body><h1>Ciao Mondo!</h1></body></html>")
});

server.listen(3000, () =>{
    console.log(`Server running at http://localhost3000`)
});